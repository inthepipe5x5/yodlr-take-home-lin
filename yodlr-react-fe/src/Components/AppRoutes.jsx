import React from "react";
import { Routes, Route } from "react-router-dom";
import { Alert } from "reactstrap";

// import { useUserContext } from "../Hooks/useUserContext";
import FormPage from "../Pages/FormPage";
import LandingPage from "../Pages/LandingPage";
import AdminPage from "../Pages/AdminPage";

import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import EditUserForm from "./EditUserForm";
import UserCard from "./UserCard";
import LandingPageContent from "./LandingPageContent";

/*
AppRoutes => React Routes component to make this an SPA
- /signup
- /login
- '/' LandingPage
- '/admin'

*/
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage content={LandingPageContent} />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route
        path="/signup"
        element={
          <FormPage
            bannerTitle="Create User"
            bannerSubtitle="Submit a new user to the system"
            childForm={<SignUpForm />}
          />
        }
      />
      <Route
        path="/login"
        element={
          <FormPage
            bannerTitle="Login User"
            bannerSubtitle="Login as a pre-existing user to the system"
            childForm={<LoginForm />}
          />
        }
      />
      <Route
        path="/logout"
        element={
          <>
            <Alert color="success">Log Out Successful!</Alert>
            <LandingPage />
          </>
        }
      />
      <Route
        path="/users/:id/edit"
        element={<FormPage childForm={EditUserForm} />}
      />
      <Route
        path="/users/:id"
        element={
          <LandingPage
            bannerTitle={"Modify User"}
            bannerSubtitle={"Edit, Activate, Delete"}
            content={<UserCard />}
          />
        }
      />
      <Route path="/profile" element={<UserCard />} />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
