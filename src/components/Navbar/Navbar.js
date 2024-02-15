import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
      <div className="nav-blank"></div>
    </nav>
  );
};
