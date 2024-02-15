import "./index.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Project, Contact, Skills, Home } from "./components/pages";

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