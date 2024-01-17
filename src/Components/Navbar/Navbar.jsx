import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState("shop");

  return (
    <>
      <div className="navBar">
        <div className="navLogo">
          <img src={logo} alt="" />
        </div>
        <ul className="navMenu">
          <li onClick={() => setActive("shop")}>
            <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
              Shop
            </Link>
            {active === "shop" ? <hr /> : ""}
          </li>
          <li onClick={() => setActive("men")}>
            <Link
              to="/mens"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Men
            </Link>
            {active === "men" ? <hr /> : ""}
          </li>
          <li onClick={() => setActive("women")}>
            <Link
              to="/womens"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Women
            </Link>
            {active === "women" ? <hr /> : ""}
          </li>
          <li onClick={() => setActive("kids")}>
            <Link
              to="/kids"
              style={{ textDecoration: "none", color: "#626262" }}
            >
              Kids
            </Link>
            {active === "kids" ? <hr /> : ""}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            <button>Login</button>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "#626262" }}>
            <img style={{ cursor: "pointer" }} src={cartIcon} />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
};
