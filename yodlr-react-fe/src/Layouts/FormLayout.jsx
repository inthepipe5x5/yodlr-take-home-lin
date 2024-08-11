/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col } from "reactstrap";

/*
Container: Wraps the entire layout to provide consistent padding and alignment.
Row and Col: Use Row and Col to center the form on the page. 
The Col component with md={{ size: 8, offset: 2 }} centers the form and makes it span 8 columns on medium and larger screens.
FormComponent Prop: The form prop is expected to be a React component that represents the form. It is rendered inside the Col.

*/

const FormLayout = ({ form: FormComponent }) => {
  return (
    <Container>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <FormComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default FormLayout;