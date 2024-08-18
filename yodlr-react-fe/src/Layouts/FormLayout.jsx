import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import LoginForm from "../Components/LoginForm";
import Banner from "../Components/Banner";
/*
Container: Wraps the entire layout to provide consistent padding and alignment.
Row and Col: Use Row and Col to center the form on the page. 
The Col component with md={{ size: 8, offset: 2 }} centers the form and makes it span 8 columns on medium and larger screens.
Form Prop: The form prop is expected to be a React component that represents the form. It is rendered inside the Col.

*/

const FormLayout = ({ header, content, footer }) => {
  return (
    <>
      <Container className="layout-content-container mt-60">
        <header className="layout-header">{header || <Banner></Banner>}</header>
        <main className="layout-content">
          <Col md={{ size: 8, offset: 2 }} style={{marginLeft: "auto", marginBottom: "10px"}}>{content || <LoginForm />}</Col>
        </main>
      </Container>
    </>
  );
};

// Prop types
FormLayout.propTypes = {
  header: PropTypes.elementType,
  sidebar: PropTypes.elementType,
  content: PropTypes.elementType,
  footer: PropTypes.elementType,
};

export default FormLayout;
