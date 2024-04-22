import React from "react";

import Styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={Styles.home}>
      <h1>Lucky Rathore</h1>
      <img
        src={process.env.REACT_APP_IMAGE_LINK}
        alt="my-image"
        width="250"
        height="260"
      ></img>
      <a className={Styles.resume} href={process.env.REACT_APP_RESUME_LINK}>
        Resume
      </a>
    </div>
  );
};

export default Home;
