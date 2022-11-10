import React from "react";
import { Button } from "../button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export const EmptyCart = () => {
  const { shoppingCartDispatch } = useShoppingCartContext();

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p>Dodaj coś do mnie, aby mnie uszczęśliwić ;)</p>
      <Button onClick={() => shoppingCartDispatch({ type: "toggle_cart" })}>
        Kontynuj zakupy
      </Button>
    </div>
  );
};
