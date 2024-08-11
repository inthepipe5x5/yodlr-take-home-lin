/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ permission, redirectPath = "/login", children }) => {

  if (!permission) {
    console.error("wrong permissions");
    return <Navigate to={redirectPath} />;
  }

  return children;
};


export default ProtectedRoute;
