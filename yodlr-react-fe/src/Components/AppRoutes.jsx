import React from "react";
import { Routes, Route } from "react-router-dom";
import { Alert } from "reactstrap";

import ProtectedRoute from "./ProtectedRoute";
import ListPage from "./ListPage";
import UserResult from "./UserResult";
import ResultPage from "./ResultPage";
import FormPage from "./FormPage";
import NotFound from "../NotFound";
import SubmitNew from "./SubmitNew";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import EditUserForm from "./EditUserForm";
import { useUserContext } from "./useUserContext";
import DetailPage from "./DetailPage";
import FormPage from "../Pages/FormPage";
import LandingPage from "../Pages/LandingPage";
import AdminPage from "../Pages/AdminPage";

/*
AppRoutes => React Routes component to make this an SPA
- /signup
- /login
- '/' will be either AdminDash (if logged in) or LandingPage if unauthenticated

*/
const AppRoutes = () => {
  let auth = useUserContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            permission={auth !== undefined ? true : false}
            redirect={LandingPage}
            children={AdminPage}
          />
        }
      />
      <Route path="signup" element={<FormPage ChildForm={SignUpForm} Layout={FormLayout} />} />
      <Route path="login" element={<FormPage ChildForm={LoginForm} Layout={FormLayout} />} />
      <Route
        path="logout"
        element={
          <>
            <Alert color="success">Log Out Successful!</Alert>
            <LandingPage />
          </>
        }
      />
      <Route
        path="users/:username/edit"
        element={
          <ProtectedRoute>
            <FormPage ChildAuthForm={EditUserForm} />
          </ProtectedRoute>
        }
      />
      <Route
        path="users/:username"
        element={
          <ProtectedRoute>
            <ResultPage resultType="user" detailed />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <UserResult />
          </ProtectedRoute>
        }
      />
      <Route path="/NotFound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
