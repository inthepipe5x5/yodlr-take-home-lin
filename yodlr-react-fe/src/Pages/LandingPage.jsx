/* eslint-disable react/prop-types */
// LandingPage.jsx
import React, { createElement } from "react";
import propTypes from "prop-types";
import DashLayout from "../Layouts/DashLayout";
import LandingPageContent from "../Components/LandingPageContent";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} content - ContentComponent that will be nested within the Layout Component
 */
const LandingPage = ({ Content = LandingPageContent, Layout = DashLayout }) => {
  return <Layout Content={Content}></Layout>;
};

LandingPage.propTypes = {
  Content: propTypes.elementType,
  Layout: propTypes.elementType
}

export default LandingPage;
