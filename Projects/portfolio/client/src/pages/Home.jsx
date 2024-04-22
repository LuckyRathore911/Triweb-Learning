import React from "react";

const Home = () => {
  return (
    <>
      <h1>Lucky Rathore</h1>
      <img
        src={process.env.REACT_APP_IMAGE_LINK}
        alt="my-image"
        width="250"
        height="260"
      ></img>
      <a href={process.env.REACT_APP_RESUME_LINK}>Resume</a>
    </>
  );
};

export default Home;
