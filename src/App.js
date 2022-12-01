import "./App.css";
import React, { useState } from "react";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom"; //used for implementing dynamic routing in react

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.title = "TextUtils - Light Mode";
      // changeColor("white");

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        {/* <Routes>
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            />
            <Route exact path="/about" element={<About />} />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

// ! App.js is a type of component which is being rendered by the index.js file and it's content is showing on the main page of react local dev environment (the first page you see when you run npm start)
// ? most imp folders are public and src and most imp file in src folder are App.js and index.js

/* //* JSX is almost similar to HTML the only difference is we can write
JavaScript inside it and bcoz in JavaScript we have class as reserved keyword
we have to write className in JSX and as for is also reserved keyword
we have to write htmlFor(React prefer camel case) */

// TODO - Concept -> when we give/upload our code to someone we dlt node modules folder bcoz it can be installed using ``npm install`` using package.json /package-lock.json file that's why /gitignore file contains node_modules foldet
