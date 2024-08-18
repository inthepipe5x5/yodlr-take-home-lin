// Banner.js
import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";


const Banner = ({
  title = "Yodlr",
  subtitle = "Where yodelling meets admin",
  backgroundColor = "#f8f9fa", // Default Bootstrap Jumbotron background
  textColor = "#000", // Default text color
}) => {
  const navigate = useNavigate();

  //styles
  const bannerStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  return (
    <Container fluid style={bannerStyle}>
      <Row className="align-items-center">

        <Col xs={12} md={10} className="text-center text-md-left">
          <h3 className="display-4">{title}</h3>
          {/* <hr className="my-2" /> */}
          <small className="lead">{subtitle}</small>
        </Col>
      </Row>
    </Container>
  );
};

// Prop types for validation
Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Banner;