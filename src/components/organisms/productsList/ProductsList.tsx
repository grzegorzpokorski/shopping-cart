import React from "react";
import { ProductType } from "../../../providers/ShoppingCartProvider";
import { ProductListItem } from "../../molecules/productListItem/ProductListItem";

type ProductsListProps = {
  products: ProductType[];
};

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
