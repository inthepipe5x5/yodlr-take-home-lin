// LandingPageContent.js
import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";

const LandingPageContent = ({
  title = "Welcome Yodlr Admin!",
  subtitle = "We are glad to have you here.",
  buttonText = "Get Started",
  buttonLink = "/admin",
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
      <h1 className="display-4">{title}</h1>
      <p className="lead">{subtitle}</p>
      <hr className="my-2" />
      <Button
        color="primary"
        className="mt-3"
        onClick={() => navigate(`${buttonLink}`)}
      >
        {buttonText}
      </Button>
    </Container>
  );
};

// Prop types for validation
LandingPageContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default LandingPageContent;
