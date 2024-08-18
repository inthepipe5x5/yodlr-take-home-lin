import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import LoginForm from "../Components/LoginForm";
import NavBar from "../Components/NavBar";

/*
Container: Wraps the entire layout to provide consistent padding and alignment.
Row and Col: Use Row and Col to center the form on the page. 
The Col component with md={{ size: 8, offset: 2 }} centers the form and makes it span 8 columns on medium and larger screens.
Form Prop: The form prop is expected to be a React component that represents the form. It is rendered inside the Col.

*/

const FormLayout = ({ Form = LoginForm }) => {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar></NavBar>
        </Col>
        <Col md={{ size: 8, offset: 2 }}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

// Prop types
FormLayout.propTypes = {
  Form: PropTypes.elementType,
};

export default FormLayout;
