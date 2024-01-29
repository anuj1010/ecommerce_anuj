import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import MensBanner from "./Components/Assets/banner_mens.png";
import WomenBanner from "./Components/Assets/banner_women.png";
import KidsBanner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/mens"
          element={<ShopCategory Category="men" Banner={MensBanner} />}
        />
        <Route
          path="/womens"
          element={<ShopCategory Category="women" Banner={WomenBanner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory Category="kid" Banner={KidsBanner} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productID" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
