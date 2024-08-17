/* eslint-disable react/prop-types */
import React, {
  useState,
  useMemo,
  useCallback,
  createContext,
  useEffect,
} from "react";
import YodlrApi from "../../lib/api.js";
import useLocalStorage, {
  retrieveStoredPrevUser,
} from "../src/Hooks/useLocalStorage.jsx";

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
  const loginUser = useCallback(
    (token, id) => {
      if (!token || !id) return;
      const user = { token, id };
      setLocalUserToken(user);
      setCurrentUser(user);
    },
    [setLocalUserToken]
  );

  const logoutUser = useCallback(() => {
    setLocalUserToken(undefined); // Clear localStorage
    //reset stored currentUser & userDetails
    setCurrentUser({ token: null, id: null });
    setUserDetails(null);
  }, [setLocalUserToken]);

  const fetchUserDetails = useCallback(async () => {
    if (!currentUser || !currentUser.id) return null;
    const { id } = currentUser;
    try {
      const response = await YodlrApi.getUser(id);
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
      loginUser,
      logoutUser,
      fetchUserDetails,
    }),
    [currentUser, userDetails, loginUser, logoutUser, fetchUserDetails]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
