import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export const storedJwt = localStorage.getItem("token");
export const isAuth = localStorage.getItem("isAuth");

export const apiUrl = {
  link: `http://localhost:5000`,
};

const App = ({ children, props }) => {
  console.log(props);
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default App;
