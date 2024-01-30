import React, { useContext } from "react";
import "./ProductDisplay.css";
import StarIcon from "../Assets/star_icon.png";
import StarDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const product = props.product[0];

  return (
    <div className="productDisplay">
      <div className="productDisplayLeft">
        <div className="productDisplayImgList">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="productDisplayImg">
          <img className="productDisplayMainImg" src={product.image} />
        </div>
      </div>
      <div className="productDisplayRight">
        <h1>{product.name}</h1>
        <div className="productDisplayRightStar">
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarIcon} />
          <img src={StarDullIcon} />
          <p>(127)</p>
        </div>
        <div className="productDisplayRightPrices">
          <div className="priceOld">${product.old_price}</div>
          <div className="priceNew">${product.new_price}</div>
        </div>
        <div className="productDisplayRightDescription">
          Elevate your style with this men's green solid zippered bomber jacket.
          Featuring a slim fit and full-zip closure, it combines contemporary
          fashion with classic appeal for a versatile and trendy look.
        </div>
        <div className="productDisplayRightSize">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XLL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productDisplayRightCategory">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productDisplayRightCategory">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
