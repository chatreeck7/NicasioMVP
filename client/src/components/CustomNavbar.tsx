import React from "react";
import logo from "../logo.png"
import { Navbar } from "react-bootstrap";

export function CustomNavbar() {
  return (
    <Navbar className="navbar align-items-center" bg="dark" variant="dark">
      <Navbar.Brand className="m-3" href="#home">
        <img
          src={logo}
          className="navbar-logo d-inline-block align-top"
          width="30"
          height="30"
          alt="logo"
        />{" "}
        ChuayCook
      </Navbar.Brand>
    </Navbar>
  );
}
