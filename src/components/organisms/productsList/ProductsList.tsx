import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { ProductListItem } from "../../molecules/productListItem/ProductListItem";

export const ProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
      {shoppingCartState.products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
