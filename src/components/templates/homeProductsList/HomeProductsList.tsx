import React from "react";
import {
  SortByType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { getCategories } from "../../../utils/getCategories";
import { getProductsByCategory } from "../../../utils/getProductsByCategory";
import { getSortedProducts } from "../../../utils/getSortedProducts";
import { SelectInput } from "../../atoms/selectInput/SelectInput";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState, dispatch } = useShoppingCartContext();
  const categories = getCategories(shoppingCartState.products);
  const productsFromCategory = getProductsByCategory(
    getSortedProducts(shoppingCartState.products, shoppingCartState.sortBy),
    shoppingCartState.category,
    categories,
  );
  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <Title as="h2">Wszystkie przedmioty</Title>
        <div className="flex flex-wrap gap-3 mb-6">
          <SelectInput
            label="kategoria"
            name="kategoria"
            currentValue={shoppingCartState.category}
            options={[
              { label: "wszystko", value: "" },
              ...categories.map((category) => {
                return { label: category, value: category };
              }),
            ]}
            onChange={(e) =>
              dispatch({
                type: "change_displayed_category",
                category: e.target.value,
              })
            }
          />
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
              dispatch({
                type: "change_sort_by",
                sortBy: e.target.value as SortByType,
              })
            }
          />
        </div>
      </div>
      <ProductsList
        products={
          productsFromCategory.length > 0
            ? productsFromCategory
            : shoppingCartState.products
        }
      />
    </>
  );
};
