import React, { useState } from "react";
import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import Yodlr from "../assets/Yodlr.png";
const NavBar = () => {
  const [authStatus, setAuthStatus] = useState(false); // Example auth status

  return (
    <div className="p-3 bg-white" style={{ width: "280px" }}>
      <Nav vertical>
        <NavItem>
          <NavbarBrand tag={Link} to="/">
            <img src={Yodlr} alt="Yodlr Logo" style={{ width: "32px" }} />
            <span className="fs-5 fw-semibold">Yodlr</span>
          </NavbarBrand>
        </NavItem>
        {authStatus ? (
          <>
            <NavItem>
              <NavLink tag={Link} to="/admin-dash">Admin Dash</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/logout">Logout</NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink tag={Link} to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
};

export default NavBar;