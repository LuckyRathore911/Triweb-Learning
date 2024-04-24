import React from "react";
import { Link } from "react-router-dom";

import Styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={Styles.navigation}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/experience">WorkExperience</Link>
      </li>
      <li>
        <Link to="/education">Education</Link>
      </li>
      <li>
        <Link to="/extra-curricular">ExtraCurricular</Link>
      </li>
      <li>
        <Link to="/contact-me">ContactMe</Link>
      </li>
    </ul>
  );
};

export default Navigation;
