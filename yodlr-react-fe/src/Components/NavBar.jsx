import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Yodlr from "../assets/Yodlr.png";

const NavBar = () => {
  const [authStatus, setAuthStatus] = useState(false); // Example auth status

  return (
    <div className="p-3 bg-white" style={{ width: "280px" }}>
      <Nav vertical>
        <NavItem>
          <NavLink href="/">
            <img src={Yodlr} alt="Yodlr Logo" style={{ width: "32px" }} />
            <span className="fs-5 fw-semibold">Yodlr</span>
          </NavLink>
        </NavItem>
        {authStatus ? (
          <>
            <NavItem>
              <NavLink href="/admin-dash">Admin Dash</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
};

export default NavBar;