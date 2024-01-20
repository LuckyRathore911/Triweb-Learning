import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">WorkExperience</Link>
      <Link to="/education">Education</Link>
      <Link to="/extra-curricular">ExtraCurricular</Link>
      <Link to="/contact-me">ContactMe</Link>
    </div>
  );
};

export default Navigation;
