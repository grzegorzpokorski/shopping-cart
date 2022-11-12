import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();

  const products = getSortedProducts(
    shoppingCartState.products,
    shoppingCartState.sortBy,
  );
  return <ProductsList products={products} />;
};
