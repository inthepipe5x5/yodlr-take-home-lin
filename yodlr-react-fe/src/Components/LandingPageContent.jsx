// LandingPageContent.jsx
import React from "react";
import { Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
/**
 * Simple content component for the landing page
 */
const LandingPageContent = () => {
  const navigate = useNavigate();

  return (
    <Container
      className="text-center py-5"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <h1 className="text-dark">Welcome Yodlr Admin!</h1>
      <p className="text-muted fs-5">
        We are delighted to have you here, User Admin. Click the button below to start managing your users.
      </p>
      <Button
        color="primary"
        className="mt-3"
        onClick={() => navigate("/admin")}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default LandingPageContent;
