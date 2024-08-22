/* eslint-disable react/prop-types */
// LandingPage.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import DashLayout from "../Layouts/DashLayout";
import LandingPageContent from "../Components/LandingPageContent";
import { Alert } from "reactstrap";
import Banner from "../Components/Banner";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

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
    <div
      style={{
        // position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="landing-page-div"
    >
      <Navbar></Navbar>
      <div className="alerts" id="landing-page-alerts-div">
        {alert !== undefined && alert !== null ? (
          <Alert color={alert.color}>{alert.message}</Alert>
        ) : (
          ""
        )}
      </div>
      <div
        id="landing-page-content-div"
        // className="layout-content-container mt-60"
        style={{ position: "relative", top: "150px", width: "80%" }}
      >
        <DashLayout
          header={<Banner title={bannerTitle} subtitle={bannerSubtitle} />}
          content={content || <LandingPageContent></LandingPageContent>}
        ></DashLayout>
      </div>
      <Footer />
    </div>
  );
};

LandingPage.propTypes = {
  Content: PropTypes.elementType,
  Layout: PropTypes.elementType,
};

export default LandingPage;
