import React from "react";
import { useTranslation } from "react-i18next";
import {
  SortByType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { SelectInput } from "../../atoms/selectInput/SelectInput";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";
import { useHomeProductsList } from "./useHomeProductsList";

export const HomeProductsList = () => {
  const { shoppingCartState, dispatch } = useShoppingCartContext();
  const { t } = useTranslation();

  const { products, categories } = useHomeProductsList(
    shoppingCartState.products,
    shoppingCartState.category,
    shoppingCartState.sortBy,
  );

  return (
    <>
      <div className="flex flex-wrap items-center justify-between">
        <Title as="h2">{t("title.home")}</Title>
        <div className="flex flex-wrap gap-3 mb-6">
          <SelectInput
            label={t("select.category")}
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
            label={t("select.sorting")}
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
      <ProductsList products={products} />
      {}
    </>
  );
};
