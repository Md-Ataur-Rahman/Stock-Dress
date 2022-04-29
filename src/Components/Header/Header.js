import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerStyle from "./Header.module.css";

const Header = () => {
  return (
    <Navbar
      style={{
        width: "100%",
        background: "rgba(0, 0, 0, 0.4)",
        position: "absolute",
        zIndex: 100000,
      }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className={headerStyle.logo_container}>
            <h1 className={headerStyle.logo}>Stock Dress</h1>
            <div className={headerStyle.logo_divider}>
              <div className={headerStyle.divider_left}></div>
              <div className={headerStyle.divider_right}></div>
            </div>
            <p className={headerStyle.sub_logo}>Unlimited Dresses</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
