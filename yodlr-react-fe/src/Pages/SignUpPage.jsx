import React from "react";
import PropTypes from "prop-types";
import FormLayout from "../Layouts/FormLayout";
import SignUpForm from "../Components/SignUpForm";

/*
Modular sign up page for /signup
- Takes Layout -> React Layout component
- Takes Form -> React Form component
*/

const SignUpPage = ({ Layout = FormLayout, Form = SignUpForm }) => {
    return <Layout Form={Form} />;
  };

// Prop types
SignUpPage.propTypes = {
  Layout: PropTypes.elementType,
  Form: PropTypes.elementType,
};

export default SignUpPage;
