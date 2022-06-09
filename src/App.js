import "./App.css";
import Navbox from "./components/Navbox";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// todo ------> add a blue loading bar for loading feel

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Navbox />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
