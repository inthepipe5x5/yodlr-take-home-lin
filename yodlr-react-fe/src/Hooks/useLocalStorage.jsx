/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const updateLocalStorage = ({ token, username }) => {
  if (!token || !username) {
    console.error("Invalid token or username");
    return false;
  }
  const user = { token, username };
  localStorage.setItem(tokenKey, JSON.stringify(user));
  console.log(`{${username} successfully saved to local storage.}`);
  return true;
};

//tokenKey to store in localStorage
const tokenKey = 'YODLR_USER'

export const retrieveStoredPrevUser = () => {
  //init user as empty object
  const user = { token: null, username: null };
  let prevUser = localStorage.getItem(tokenKey);
  if (prevUser) {
    prevUser = JSON.parse(prevUser);
    const { username } = prevUser;
    user.username = username;
  }

  console.debug(
    `${
      user.username
        ? "found previous user token in storage: " + user.username
        : "no token found in storage, initiated with anon user context"
    }`
  );
  //return user if found, else return template currentUser object with null property values
  return user;
};

const removeLocalStorageTokenAfterLogout = (key = tokenKey) => {
  //remove user token from local storage
  localStorage.removeItem(key);
};

const useLocalStorage = (key = "YodlrUserToken") => {
  // Create state variable to store
  // localStorage value in state
  const [localVal, setLocalVal] = useState(retrieveStoredPrevUser());

  // this method update our localStorage and our state
  const setLocalStorageStateValue = (newValOrFunc = updateLocalStorage) => {
    let newValue;
    //dynamically set the newValue to be stored in localStorage
    if (!newValOrFunc || newValOrFunc === undefined) {
      removeLocalStorageTokenAfterLogout();
    } else if (typeof newValOrFunc === "function") {
      newValue = newValOrFunc(localVal);
      updateLocalStorage(newValue);
    } else {
      newValue = newValOrFunc;
      updateLocalStorage(newValue);
    }

    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalVal(newValue);
  };
  return [localVal, setLocalStorageStateValue];
};

export default useLocalStorage;
