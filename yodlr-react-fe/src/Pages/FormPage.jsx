/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "reactstrap";

import FormLayout from "../Layouts/FormLayout";
import LoginForm from "../Components/LoginForm";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} childForm - FormComponent that will be nested within the Layout Component
 */
const FormPage = ({
  alerts = null,
  bannerTitle,
  bannerSubtitle,
  childForm = LoginForm,
}) => {
  //   let exampleAlert = { message: "blah blah blah", color: "success" };
  const [alert, setAlerts] = useState(alerts);

  return (
    <>
      <div className="alerts">
        {alert !== undefined && alert !== null ? (
          <Alert color={alert.color}>{alert.message}</Alert>
        ) : (
          ""
        )}
      </div>
      <FormLayout
        header={<Banner title={bannerTitle} subtitle={bannerSubtitle}></Banner>}
        // footer={<Footer></Footer>}
        content={childForm}
      />
    </>
  );
};

FormPage.propTypes = {
  Layout: PropTypes.elementType,
  childForm: PropTypes.elementType,
};

export default FormPage;
