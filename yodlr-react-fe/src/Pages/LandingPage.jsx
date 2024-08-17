/* eslint-disable react/prop-types */
// LandingPage.jsx
import React, { createElement } from "react";
import DashLayout from "../Layouts/DashLayout";
import LandingPageContent from "../Components/LandingPageContent";

/**
 * Page component that renders a Layout component that organizes a child component within it
 * @param {React.ComponentType} Layout - LayoutComponent that will wrap the child form
 * @param {React.ComponentType} content - ContentComponent that will be nested within the Layout Component
 */
const LandingPage = ({ content: ContentComponent, Layout }) => {
  const RenderContent = () => {
    //helper function to dynamically render child content component based on ContentComponent passed in
    if (ContentComponent !== undefined) {
      return createElement(ContentComponent);
    } else {
      return createElement(LandingPageContent);
    }
  };
  const RenderLayout = Layout || DashLayout;

  return <RenderLayout>{RenderContent()}</RenderLayout>;
};

export default LandingPage;
