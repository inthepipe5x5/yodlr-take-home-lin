/* eslint-disable react/prop-types */
/**
 * The DashLayout component renders a layout with a navigation bar and content component in a responsive grid using Reactstrap.
 * Returns The `DashLayout` component is being returned. 
 * It consists of a layout structure with a `Container` component from Reactstrap containing two `Col` components inside a `Row`. 
 * The first `Col` contains a `NavBar` component, and the second `Col` dynamically renders the `ContentComponent`
 * passed as a prop.
 * 
 * Container Fluid: Use Container fluid to make the layout span the full width of the viewport.
 * Column Layout: Use Col components to define the width of each section:
        * xs="2" md="2" lg="2" for the NavBar to ensure it takes up 2 columns on all screen sizes.
        * xs="10" md="10" lg="10" for the content to take up the remaining 10 columns.
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavBar from "../Components/NavBar";

const DashLayout = ({ content: ContentComponent }) => {
  return (
    <Container fluid>
      <Row>
        <Col xs="2" md="2" lg="2">
          <NavBar />
        </Col>
        <Col xs="10" md="10" lg="10">
          {ContentComponent ? <ContentComponent /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default DashLayout;