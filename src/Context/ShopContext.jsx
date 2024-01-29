import React from "react";
import { createContext } from "react";
import allProducts from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const shopCategoryData = allProducts;

  return (
    <ShopContext.Provider value={{ shopCategoryData }}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
