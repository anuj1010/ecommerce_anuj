import React from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import BreadCrum from "../Components/BreadCrum/BreadCrum.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const contextData = useContext(ShopContext);
  const allProducts = contextData.shopCategoryData;
  const { productID } = useParams();

  const product = allProducts.filter((val) => {
    if (val.id === Number(productID)) {
      return val;
    }
  });

  console.log(product);
  return (
    <>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </>
  );
};
export default Product;
