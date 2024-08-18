import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import Yodlr from "../assets/Yodlr.png";
import "./NavBar.css";

const NavBar = () => {
  const [authStatus, setAuthStatus] = useState(true); // Example auth status

  return (
    <Navbar color="light" expand="md" className="navbar">
      <NavbarBrand tag={Link} to="/">
        <img src={Yodlr} alt="Yodlr Logo" style={{ width: "32px" }} />
        <span className="fs-5 fw-semibold">Yodlr</span>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/admin">
            Dashboard
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/signup">
            Create User
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/logout">
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
