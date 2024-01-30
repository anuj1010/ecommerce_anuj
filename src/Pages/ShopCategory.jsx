import React, { useContext } from "react";
import DropDownIcon from "../Components/Assets/dropdown_icon.png";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = ({ Category, Banner }) => {
  const contextData = useContext(ShopContext);
  const allProducts = contextData.allProducts;

  return (
    <div className="shopCategory">
      <img className="shopCategoryBanner" src={Banner} />
      <div className="shopCategoryIndexSort">
        <p>
          <span>Showing 1-12 </span>Out of 36 Products
        </p>
        <div className="shopCategorySort">
          Sort by <img src={DropDownIcon} />
        </div>
      </div>
      <div className="shopCategoryProducts">
        {allProducts.map((item, index) => {
          if (Category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          } else {
            null;
          }
        })}
      </div>
      <div className="shopeCategoryLoadMore">Explore More</div>
    </div>
  );
};
export default ShopCategory;
