import React from "react";
import "./BreadCrum.css";
import ArrowIcon from "../Assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
  const product = props.product;
  return (
    <div className="breadCrum">
      Home <img src={ArrowIcon} />
      Shop <img src={ArrowIcon} />
      {product[0].category}
      <img src={ArrowIcon} />
      {product[0].name}
    </div>
  );
};

export default BreadCrum;
