import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faMobileAlt, faMap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Alert, Col, Button } from "react-bootstrap";
import { apiUrl } from "./../App";
import AlertMessage from "../components/layout/AlertMessage";

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(``);
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState(``);
  const [data, setData] = useState(``);

  const registerUSer = async function () {
    let dataForm = "_method=" + encodeURIComponent("POST");
    dataForm += "&name=" + encodeURIComponent(username);
    dataForm += "&email=" + encodeURIComponent(email);
    dataForm += "&password=" + encodeURIComponent(password);
    console.log(`dataForm: `, dataForm);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: dataForm,
    };
    fetch(`${apiUrl.link}`, requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const resp = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (resp && resp.message) || response.status;
          console.debug("not ok : ", resp);
          setErrorMessage(true);
          setMessage(resp.message);
          return Promise.reject(error);
        }
        setData(resp);
        console.debug("ok : ", resp);
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });

    console.debug("state data : ", data);
    //********************* */
  };

  var alertMessage;
  if (errorMessage) {
    alertMessage = (
      <Alert variant={'danger'} onClose={() => (setErrorMessage(false), setMessage(''))} dismissible>
        <Alert.Heading>{'Hey'}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  console.log("error message: ", errorMessage);
  return (
    <div className="mt-5">
      {alertMessage}

      <section className="pt-5 container">
        <p className="h1 text-primary mb-3 mt-3">Register</p>
        <Form>
          <Form.Floating className="mb-3">
            <Form.Control
              id="username"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type={showPassword ? `text` : `password`}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
          <Form.Check id={`showPassword`} className="mt-2 mb">
            <Form.Check.Input
              type={`checkbox`}
              onChange={() => setShowPassword(!showPassword)}
            />
            <Form.Check.Label>
              {!showPassword ? `Show ` : `Hide `} Password
            </Form.Check.Label>
          </Form.Check>
          <div className="text-center">
            <Button
              variant="primary"
              type="button"
              className="btn btn-primary mt-3"
              onClick={() => registerUSer()}
            >
              <FontAwesomeIcon
                style={{ marginLeft: 5, marginRight: 10 }}
                icon={faSave}
                size="1x"
              />
              Submit
            </Button>
          </div>
        </Form>
      </section>
      <p>correo: {email}</p>
    </div>
  );
}

export default Register;
