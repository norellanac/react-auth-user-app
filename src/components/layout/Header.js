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
        <Navbar bg="light" expand={false}>
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Mensajes</Nav.Link>
                  <NavDropdown title="Usuarios" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">
                      Registro
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Ingresar
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </section>

      <section>
        <Navbar fixed="bottom" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">norellanac</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <p>
                  <span
                    className=" h1 mt-5 text-center ml-5"
                    style={{ fontsize: "60px;" }}
                  >
                    <a href="https://github.com/norellanac">
                      <FontAwesomeIcon
                        style={{ marginRight: 20 }}
                        icon={faGithub}
                        size="1x"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/">
                      <FontAwesomeIcon
                        style={{ marginRight: 20 }}
                        icon={faLinkedin}
                        size="1x"
                      />
                    </a>
                    <a href="https://m.facebook.com/alexis.orellana2">
                      <FontAwesomeIcon
                        style={{ marginRight: 20 }}
                        icon={faFacebook}
                        size="1x"
                      />
                    </a>
                    <a href="https://www.instagram.com/norellanac/">
                      <FontAwesomeIcon
                        style={{ marginRight: 20 }}
                        icon={faInstagram}
                        size="1x"
                      />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=50233120413">
                      <FontAwesomeIcon
                        style={{ marginRight: 20 }}
                        icon={faWhatsapp}
                        size="1x"
                      />{" "}
                    </a>
                  </span>
                </p>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </div>
  );
}

export default HeaderPage;
