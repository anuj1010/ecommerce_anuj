import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <h2>NEW ARRIVALS ONLY</h2>

        <div>
          <div className="heroHandIcon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>

        <div className="heroLatestBtn">
          <div>Latest Collections</div>
          <img src={arrowIcon} />
        </div>
      </div>

      <div className="heroRight">
        <img src={heroImage} />
      </div>
    </div>
  );
};

export default Hero;
