import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Contact, Skills, Home } from "./components/pages";
import Project from "./components/pages/project/Project";
import "./index.css";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;