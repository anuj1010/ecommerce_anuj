import React from "react";
import "./Offer.css";
import exclusiveImage from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer">
      <div className="offerLeft">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offerRight">
        <img src={exclusiveImage} />
      </div>
    </div>
  );
};

export default Offer;
