import React from "react";
import {
  SortByType,
  useShoppingCartContext,
} from "../../../context/ShoppingCartContext";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { SelectInput } from "../../atoms/selectInput/SelectInput";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState, shoppingCartDispatch } = useShoppingCartContext();
  const products = shoppingCartState.products.map((item) => item);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <Title as="h2">Wszystkie przedmioty</Title>
        <SelectInput
          label="sorotwanie"
          name="sortowanie"
          currentValue={shoppingCartState.sortBy}
          options={Array<{ label: string; value: SortByType }>(
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
          )}
          onChange={(e) =>
            shoppingCartDispatch({
              type: "change_sort_by",
              sortBy: e.target.value as SortByType,
            })
          }
        />
      </div>
      <ProductsList
        products={getSortedProducts(products, shoppingCartState.sortBy)}
      />
    </>
  );
};
