import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="descriptionNav">
        <div className="navItem">Description</div>
        <div className="navItem fade">Reviews (122)</div>
      </div>
      <div className="descriptionText">
        <p>
          Welcome to Ezy Shopper, crafted with passion by Anuj and powered by
          MERN (MongoDB, Express.js, React, Node.js) development! Explore a
          seamless and stylish online shopping experience where Anuj's expertise
          in MERN technology ensures a smooth and efficient platform. Embrace
          the fusion of fashion and technology, and shop effortlessly with Ezy
          Shopper - where Anuj's innovation meets MERN development for a
          delightful shopping journey!
        </p>
        <p>
          Discover unparalleled diversity at Ezy Shopper – Anuj's MERN-developed
          masterpiece. Explore a spectrum of colors, sizes, and styles, ensuring
          a perfect fit for every taste. Elevate your wardrobe effortlessly with
          our curated collection, where variety meets innovation.
        </p>
      </div>
    </div>
  );
};

export default Description;
