import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { SelectProductsOrder } from "../../atoms/selectProductsOrder/SelectProductsOrder";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();
  const products = shoppingCartState.products.map((item) => item);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <Title as="h2">Wszystkie przedmioty</Title>
        <SelectProductsOrder
          label="sortowanie"
          options={[
            {
              label: "polecane",
              value: "DEFAULT",
            },
            {
              label: "cena: od najniższej",
              value: "PRICE_ASC",
            },
            {
              label: "cena: od najwyższej",
              value: "PRICE_DESC",
            },
          ]}
        />
      </div>
      <ProductsList
        products={getSortedProducts(products, shoppingCartState.sortBy)}
      />
    </>
  );
};
