import React from "react";
import PropTypes from "prop-types";
import FormLayout from "../Layouts/FormLayout";
import SignUpForm from "../Components/SignUpForm";

/*
Modular sign up page for /signup
- Takes Layout -> React Layout component
- Takes Form -> React Form component
*/

const SignUpPage = ({ Layout, Form }) => {
  return (
    <Layout Form={Form}>
      <h3>Sign Up!</h3>
      <hr></hr>
    </Layout>
  );
};

// Prop types
SignUpPage.propTypes = {
  Layout: PropTypes.elementType,
  Form: PropTypes.elementType,
};

// Default props
SignUpPage.defaultProps = {
  Layout: FormLayout,
  Form: SignUpForm,
};

export default SignUpPage;
