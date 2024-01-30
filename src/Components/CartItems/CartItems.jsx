import React, { useContext } from "react";
import "./CartItems.css";
import removeIcon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { allProducts, cartItems, removeFromCart, totalCartValue } =
    useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItmesFormatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cartItemsFormat cartItmesFormatMain ">
                <img src={item.image} className="cartProductIcon" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className="itemsQuantity">{cartItems[item.id]}</button>
                <p>${cartItems[item.id] * item.new_price}</p>
                <img
                  className="removeIcon"
                  onClick={() => {
                    removeFromCart(item.id);
                  }}
                  src={removeIcon}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItemsBottom">
        <div className="cartTotal">
          <h1>Cart Totals</h1>
          <div>
            <div className="totalItems">
              <p>Subtotal</p>
              <p>${totalCartValue()}</p>
            </div>
            <hr />

            <div className="totalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="totalItems">
              <h3>Total</h3>
              <h3>${totalCartValue()}</h3>
            </div>
            <hr />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have a promocode, Apply it here</p>
          <div className="promobox">
            <input placeholder="Enter Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
