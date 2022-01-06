import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";

/* function App() {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
} */

const App = ({ children, props }) => {
  console.log(props);
  return (
    <div className="App">
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default App;
