// LandingPageContent.jsx
import React from 'react';
import { Container, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Simple content component for the landing page
 */
const LandingPageContent = () => {
    return (
        <Container className="text-center py-5" style={{ backgroundColor: '#f0f0f0' }}>
            <h1 className="text-dark">Welcome to the Yodlr Website!</h1>
            <p className="text-muted fs-5">
                We are delighted to have you here. Explore our features and enjoy your stay!
            </p>
            <Button color="primary" className="mt-3" onClick={() => alert('Button clicked!')}>
                Get Started
            </Button>
        </Container>
    );
};

export default LandingPageContent;