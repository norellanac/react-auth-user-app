import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export const apiUrl = {
	link: `http://localhost:5000/register`
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
