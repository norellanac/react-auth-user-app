import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUserPlus, faMap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Alert, Col, Button } from "react-bootstrap";
import { apiUrl, storedJwt, isAuth } from "./../App";
import { Navigate } from "react-router-dom";

function Register(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(``);
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [isError, setIsError] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(isAuth || false);
  const [message, setMessage] = useState(``);
  const [data, setData] = useState(``);
  const [jwt, setJwt] = useState(storedJwt || null);

  const registerUSer = async () => {
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
    fetch(`${apiUrl.link}/register`, requestOptions)
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
          setIsError(true);
          setMessage(resp.message);
          return Promise.reject(error);
        } else {
          loginUserToken(email, password);
          setData(resp);
          console.debug("ok : ", resp);
        }
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });

    console.debug("state data : ", data);
    //********************* */
  };

  const loginUserToken = async (email, password) => {
    let dataForm = "_method=" + encodeURIComponent("POST");
    dataForm += "&email=" + encodeURIComponent(email);
    dataForm += "&password=" + encodeURIComponent(password);
    console.log(`dataForm: `, dataForm);
    const requestOptions = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: dataForm,
    };
    fetch(`${apiUrl.link}/credential/`, requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const resp = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (resp && resp.message) || response.status;
          console.debug("request error : ", resp);
          setIsError(true);
          setMessage(resp.message);
        } else {
          setData(resp);
          localStorage.setItem("token", resp.token);
          localStorage.setItem("isAuth", true);
          setIsAuthUser(true);
          setJwt(resp.token);
          console.debug(
            "request completed: ",
            data,
            localStorage.getItem("token")
          );
        }
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.toString() });
        setIsError(true);
        setMessage(`There was a request error! ${error}`);
        console.error("There was a request error!", error);
      });

    console.debug("state data : ", data);
    //********************* */
  };
  if (isAuthUser) {
    return <Navigate to="/messages" />;
  }
  var alertMessage;
  if (isError) {
    alertMessage = (
      <Alert
        variant={"danger"}
        onClose={() => (setIsError(false), setMessage(""))}
        dismissible
      >
        <Alert.Heading>{"Hey"}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  var alertMessage;
  if (message) {
    alertMessage = (
      <Alert
        variant={"danger"}
        onClose={() => (setIsError(false), setMessage(""))}
        dismissible
      >
        <Alert.Heading>{"Hey"}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }
  console.log("error message: ", message);
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
                icon={faUserPlus}
                size="1x"
              />
              Sign on
            </Button>
          </div>
        </Form>
      </section>
      <p>correo: {email}</p>
    </div>
  );
}

export default Register;
