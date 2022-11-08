import React from "react";
import { useProducts } from "../../context/ProductsContext";
import { Product } from "../product/Product";

export const ProductsList = () => {
  const { products } = useProducts();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </ul>
  );
};
