import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/mens" element={<ShopCategory />} Category="mens" />
        <Route path="/womens" element={<ShopCategory />} Category="womens" />
        <Route path="/kids" element={<ShopCategory />} Category="kids" />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productID" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
