/* eslint-disable react/prop-types */
// LandingPage.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import DashLayout from "../Layouts/DashLayout";
import LandingPageContent from "../Components/LandingPageContent";
import { Alert } from "reactstrap";
import Banner from "../Components/Banner";
/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} content - ContentComponent that will be nested within the Layout Component
 */
const LandingPage = ({
  alerts = null,
  content,
  bannerTitle,
  bannerSubtitle,
}) => {
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
      <DashLayout
        header={<Banner title={bannerTitle} subtitle={bannerSubtitle} />}
        content={content || <LandingPageContent></LandingPageContent>}
      ></DashLayout>
      ;
    </>
  );
};

LandingPage.propTypes = {
  Content: PropTypes.elementType,
  Layout: PropTypes.elementType,
};

export default LandingPage;
