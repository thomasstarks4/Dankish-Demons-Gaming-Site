import React from "react";
import sleepyLogo from "../images/sleeping-dankish-demon-no-bg.png";
const UnderConstruction = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Site Under Construction</h1>
            <p>We're working on something great. Stay tuned!</p>
          </div>
          <div className="">
            <img src={sleepyLogo} alt="DDG logo" />
          </div>
          <div className="row col-12">
            <p>
              Click{" "}
              <a style={{ color: "green" }} href="/">
                here
              </a>{" "}
              to get back to the main page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
