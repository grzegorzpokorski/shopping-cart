import React from "react";
import { Button } from "../../atoms/button/Button";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";

export const EmptyCart = () => {
  const { shoppingCartDispatch } = useShoppingCartContext();

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
      <Button onClick={() => shoppingCartDispatch({ type: "toggle_cart" })}>
        Kontynuj zakupy
      </Button>
    </div>
  );
};
