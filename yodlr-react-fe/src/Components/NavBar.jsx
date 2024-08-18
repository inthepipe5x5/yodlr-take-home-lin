// NavBar.js
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Yodlr from "../assets/Yodlr.png";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      color="dark"
      expand="xs"
      className="banner-navbar"
      style={{ color: "#ffffff" }}
    >
      <NavbarBrand className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={Yodlr} alt="Yodlr Logo" style={{ width: "32px" }} />
        <span className="fs-5 fw-semibold">Yodlr</span>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        {/* <NavItem>
          <BackButton />
        </NavItem>
        <NavItem>
          <ForwardButton />
        </NavItem> */}
        <NavItem>
          <Button color="dark" onClick={() => navigate("/admin")}>
            Dashboard
          </Button>
        </NavItem>
        <NavItem>
          <Button color="dark" onClick={() => navigate("/signup")}>
            Create User
          </Button>
        </NavItem>
        <NavItem>
          <Button color="dark" onClick={() => navigate("/login")}>
            Login
          </Button>
        </NavItem>
        <NavItem>
          <Button color="dark" onClick={() => navigate("/logout")}>
            Logout
          </Button>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;