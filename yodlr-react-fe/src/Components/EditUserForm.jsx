/* eslint-disable react/prop-types */
import React, { createElement, useEffect, useState } from "react";
import YodlrApi from "../../../lib/api";
import LoginForm from "./LoginForm";
import { useParams } from "react-router";

const EditUserForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Use the api instance to fetch the user data
        const response = await YodlrApi.getUser(id);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (id) {
      getUserData();
    }
  }, [id]); // Add id as a dependency

  return createElement(LoginForm, { defaultFormData: user });
};

export default EditUserForm;
