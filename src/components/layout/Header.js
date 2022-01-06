import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMobileAlt,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faChrome,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Row,
  Col,
  Button,
  Form,
  FormControl,
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/messages">Mensajes</Nav.Link>
                  <NavDropdown title="Usuarios" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/register">
                      Registro
                    </NavDropdown.Item>
                    <NavDropdown.Item href="login">
                      Ingresar
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
