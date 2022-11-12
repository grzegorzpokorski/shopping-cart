import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();

  const products = getSortedProducts(
    shoppingCartState.products,
    shoppingCartState.sortBy,
  );
  return (
    <>
      <Title as="h2">Wszystkie przedmioty</Title>
      <ProductsList products={products} />
    </>
  );
};
