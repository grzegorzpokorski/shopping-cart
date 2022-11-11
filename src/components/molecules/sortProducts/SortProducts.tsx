import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { Button } from "../../atoms/button/Button";

export const SortProducts = () => {
  const { shoppingCartDispatch } = useShoppingCartContext();

  return (
    <>
      <Button
        onClick={() =>
          shoppingCartDispatch({ type: "change_sort_by", sortBy: "PRICE_ASC" })
        }
      >
        Sort by price ascending
      </Button>

      <Button
        onClick={() =>
          shoppingCartDispatch({ type: "change_sort_by", sortBy: "PRICE_DESC" })
        }
      >
        Sort by price descending
      </Button>
    </>
  );
};
