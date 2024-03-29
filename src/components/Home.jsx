// import logoImg from "../images/ddg-logo-no-bg.png";
import AnimatedLogo from "./AnimatedLogo";
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <h1 className="m-3">Welcome!</h1>
      </div>
      <div className="video-container">
        <AnimatedLogo />
      </div>
    </React.Fragment>
  );
};
export default Home;
