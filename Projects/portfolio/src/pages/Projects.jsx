import React from "react";

import Project from "../components/Project";
import Styles from "../styles/Pages.module.css";

const Projects = () => {
  return (
    <div className={Styles.page}>
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
