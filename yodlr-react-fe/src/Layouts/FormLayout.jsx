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
      <div
        // className="layout-content-container mt-60"
        style={{
          paddingRight: "0",
          paddingLeft: "0",
        }}
      >
        <header className="layout-header">{header || <Banner></Banner>}</header>
        <main className="layout-content">
          <Col
            md={{ size: 8, offset: 2 }}
            style={{
              //these styles control the form component CSS layout & spacing
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "10px",
              width: "80%",
              paddingTop: "2px",
              paddingBottom: "2px",
            }}
          >
            <div id="form-content" style={{ maxWidth: "75vw" }}>{content || <LoginForm />}</div>
          </Col>
        </main>
      </div>
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
