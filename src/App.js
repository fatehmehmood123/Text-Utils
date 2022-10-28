import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const removeClasses = ()=>{
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-danger");
  document.body.classList.remove("bg-warning");
}
function App() {
  
  const [mode, setmode] = useState("light");
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
      <Navbar title="Text Utilities" mode={mode} toggle={toggleMode} />
        <Routes>
          {/* <Route path="/About" element={<About/>} /> */}
          <Route
            path="/"
            element={
              <TextForm mode={mode} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
