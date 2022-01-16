import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";

function HeaderPage(props) {
  return (
    <div>
      <section>
        <Navbar fixed="top" bg="dark" variant="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">ReactApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  ReactApp
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/messages" className="nav-link">
                      Messages
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Users" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item>
                      <Link to="/register" className="nav-link">
                        Register
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/login" className="nav-link">
                        Log In
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </section>
    </div>
  );
}

export default HeaderPage;
