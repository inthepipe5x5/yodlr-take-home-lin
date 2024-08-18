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

import React, { createElement } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import NavBar from "../Components/NavBar";
import LandingPageContent from "../Components/LandingPageContent";

const DashLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          {/* <Col xs="2" md="2" lg="2"> */}
          {/* </Col> */}
          <Col className="px-4" xs="12" md="12" lg="12">

            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

DashLayout.propTypes = {
  children: PropTypes.elementType,
};

export default DashLayout;
