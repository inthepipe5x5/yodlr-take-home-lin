/* eslint-disable react/prop-types */
import React, { createElement } from "react";
import PropTypes from "prop-types";
import FormLayout from "../Layouts/FormLayout";
import LoginForm from "../Components/LoginForm";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} childForm - FormComponent that will be nested within the Layout Component
 */
const FormPage = ({ childForm = LoginForm, Layout = FormLayout }) => {
  return <Layout>{createElement(childForm)}</Layout>;
};

FormPage.propTypes = {
  Layout: PropTypes.elementType,
  childForm: PropTypes.elementType,
};

export default FormPage;
