/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Col,
  Row,
  ButtonGroup,
} from "reactstrap";

//fall back component for errors
//accepts props: error (obj), resetErrorBoundary(func)

const ErrorContentCard = ({ error, resetErrorBoundary }) => {
  if (error === undefined || !error)
    error = new Error("Uh oh. Something went wrong");
  if (error.statusCode === undefined) error.statusCode = 500;
  else if (error.status_code !== undefined)
    error.statusCode = error.status_code;

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  const { statusCode, message } = error;
  return (
    <Row className="justify-content-center">
      <Col sm="12" md="16">
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h1" className="font-weight-bold">
              {statusCode === 404
                ? `${statusCode} - Page Not Found`
                : statusCode === 401
                ? `${statusCode} - Unauthorized`
                : `${statusCode} - Error ${message ? message : ""}`}
            </CardTitle>
            <p>{message}</p>
            <Button color="warning" onClick={resetErrorBoundary}>
              Try Again
            </Button>

            <hr />
            <p>{"An error occurred, go back home."}</p>
            <ButtonGroup>
              <Button color="primary" onClick={handleGoHome}>
                Go to Home Page
              </Button>
              {statusCode === 401 && (
                <>
                  <Button color="secondary" onClick={() => navigate("/signup")}>
                    Sign up
                  </Button>
                  <Button color="info" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                </>
              )}
            </ButtonGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ErrorContentCard;
