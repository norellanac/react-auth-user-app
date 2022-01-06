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
import { Navbar, Container } from "react-bootstrap";

function Footer(props) {
  return (
    <div>
      <section className="mt-5">
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

export default Footer;
