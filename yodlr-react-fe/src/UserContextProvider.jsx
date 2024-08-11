/* eslint-disable react/prop-types */
import React, {
    useState,
    useMemo,
    useCallback,
    createContext,
    useEffect,
  } from "react";
import YodlrApi from "../../lib/api.js";
  import useLocalStorage, {retrieveStoredPrevUser} from "../src/Hooks/useLocalStorage.jsx";
  
  const UserContext = createContext({
    currentUser: retrieveStoredPrevUser(),
    loginUser: () => {},
    logoutUser: () => {},
    fetchUserDetails: () => {},
  });
  
  const UserContextProvider = ({ children }) => {
    const [localUserToken, setLocalUserToken] = useLocalStorage();
    const [currentUser, setCurrentUser] = useState(localUserToken);
    const [userDetails, setUserDetails] = useState(null);
    const [jobApps, setJobApps] = useState([]);
    const loginUser = useCallback(
      (token, username) => {
        if (!token || !username) return;
        const user = { token, username };
        setLocalUserToken(user);
        YodlrApi.token = token;
        setCurrentUser(user);
      },
      [setLocalUserToken]
    );
  
    const logoutUser = useCallback(() => {
      setLocalUserToken(undefined); // Clear localStorage
      YodlrApi.token = null;
      //reset stored currentUser & userDetails
      setCurrentUser({ token: null, username: null });
      setUserDetails(null);
      //result job apps
      setJobApps([]);
      
    }, [setLocalUserToken]);
  
    const fetchUserDetails = useCallback(async () => {
      if (!currentUser || !currentUser.username) return null;
      const { username } = currentUser;
      try {
        const response = await YodlrApi.getUser(username);
        const jobs = await (await YodlrApi.request(`jobs`)).data.jobs;
        if (response.applications !== undefined && response.applications !== null ) {
          const currentApps = response.applications.length > 0
              ? jobs.filter((job) => response.applications.includes(job.id))
              : [];
              setUserDetails(response);
              setJobApps(currentApps);
        }  
        return response;
      } catch (err) {
        console.error("Failed to fetch user details", err);
        return null;
      }
    }, [currentUser]);
  
    useEffect(() => {
      if (currentUser) {
        fetchUserDetails();
      }
    }, [currentUser, fetchUserDetails]);
  
    const contextValue = useMemo(
      () => ({
        currentUser,
        userDetails,
        jobApps,
        loginUser,
        logoutUser,
        fetchUserDetails,
      }),
      [currentUser, userDetails, loginUser, logoutUser, fetchUserDetails, jobApps]
    );
  
    return (
      <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
  };
  
  export { UserContext, UserContextProvider };