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
      <Route
        path="/"
        element={
          <LandingPage content={LandingPageContent}/>
        }
      />
      <Route path="/admin" element={AdminPage} />
      <Route path="/signup" element={<FormPage childForm={SignUpForm} />} />
      <Route path="/login" element={<FormPage childForm={LoginForm} />} />
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
        path="/users/:username/edit"
        element={
          <ProtectedRoute>
            <FormPage childAuthForm={EditUserForm} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/:username"
        element={
          <ProtectedRoute>
            <UserCard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserCard />
          </ProtectedRoute>
        }
      />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
