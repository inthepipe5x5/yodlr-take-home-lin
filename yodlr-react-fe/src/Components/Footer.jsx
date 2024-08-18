// Footer.js
import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";

const getCurrentYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear.toString();
};
//generic copyright footer component

const Footer = () => {
  return (
    <Navbar color="dark" expand="md" className="footer-navbar">
      {/* Left-aligned buttons */}
      <Nav className="d-flex align-items-center" navbar>
        <NavItem>
          <BackButton />
        </NavItem>
        <NavItem>
          <ForwardButton />
        </NavItem>
      </Nav>
      
      {/* Right-aligned copyright notice */}
      <Nav className="ml-auto" navbar>
        <NavItem>{`Yodlr© ${getCurrentYear()}`}</NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;