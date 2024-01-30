import React, { useState } from "react";
import { createContext } from "react";
import allProducts from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const initialCart = () => {
  let cart = {};
  for (let i = 0; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(initialCart());
  // console.log(cartItems);
  // for (const x in cartItems) {
  //   console.log(x);
  // }

  const addToCart = (id) => {
    setCartItems((old) => ({ ...old, [id]: old[id] + 1 }));
  };

  const removeFromCart = (id) => {
    setCartItems((old) => ({ ...old, [id]: old[id] - 1 }));
  };

  const totalCartValue = () => {
    let total = 0;
    for (const x in cartItems) {
      if (cartItems[x] > 0) {
        let itemInCart = allProducts.find(
          (product) => product.id === Number(x)
        );
        total += itemInCart.new_price * cartItems[x];
      }
    }
    return total;
  };

  const totalCartCount = () => {
    let count = 0;
    for (const x in cartItems) {
      if (cartItems[x] > 0) {
        count += cartItems[x];
      }
    }
    return count;
  };

  const shopCategoryData = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    totalCartValue,
    totalCartCount,
  };

  return (
    <ShopContext.Provider value={shopCategoryData}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
