import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUserPlus, faMap } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Alert, Col, Button } from "react-bootstrap";
import { apiUrl, storedJwt, isAuth } from "./../App";
import { Navigate } from "react-router-dom";

function Messages(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(``);
  const [isError, setIsError] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(isAuth || false);
  const [message, setMessage] = useState(``);
  const [data, setData] = useState([]);
  const [jwt, setJwt] = useState(storedJwt || null);

  const requestData = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        Authorization: jwt,
      },
    };
    fetch(`${apiUrl.link}/messaqe`, requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const resp = isJson && (await response.json());
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (resp && resp?.message) || response.status;
          console.debug("request error : ");
          /* setIsError(true);
                setMessage(resp.message); */
        } else {
          setData(resp);
          console.debug("request completed: ", data);
        }
      })
      .catch((error) => {
        setIsError(true);
        setMessage(`There was a request error! ${error}`);
        console.error("There was a request error!", error);
      });

    console.debug("state data : ", data);
    //********************* */
  };

  useEffect(() => requestData(), []);

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

  const records = data.map(function (record) {
    return (
      <div>
        <p>{record.msg}</p>
      </div>
    );
  });

  console.log("error message: ", message);
  return (
    <div className="mt-5">
      {alertMessage}

      <section className="pt-5 container">
        <p className="h1 text-primary mb-3 mt-3">Messages</p>
      </section>
      {records}
    </div>
  );
}

export default Messages;
