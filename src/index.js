import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import LoginPage from "./screens/Login";
import Register from "./screens/Register";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
