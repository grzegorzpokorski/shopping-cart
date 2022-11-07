import React from "react";
import { useProducts } from "../../context/ProductsContext";
import { Product } from "../product/Product";

export const ProductsList = () => {
  const { products } = useProducts();

  return (
    <ul className="grid">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
};
