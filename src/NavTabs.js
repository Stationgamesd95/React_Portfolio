import React from "react";
import { Link } from "react-router-dom";
import "./style/nav.css";


function NavTabs(props) {
  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#project"
          onClick={() => props.handlePageChange("Project")}
          className={props.currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
