import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import headerStyle from "./Header.module.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      style={{
        width: "100%",
        display: "block",
        background: "rgb(45, 131, 148)",
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
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/home"
              style={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/manageitem"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  Manage Item
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/additem"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  AddItem
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/myitems"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                >
                  My Items
                </Nav.Link>

                <button
                  className="btn btn-link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 400,
                  }}
                  onClick={() => signOut(auth)}
                >
                  Log Out
                </button>
              </>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="ml-auto"
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: 400,
                }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
