import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import { getTotalPrice } from "../../../utils/getTotalPrice";
import { Button } from "../../atoms/button/Button";

export const CartSummary = () => {
  const { shoppingCartState, shoppingCartDispatch } = useShoppingCartContext();

  return (
    <div className="flex flex-col justify-end border-t border-zinc-200 py-6">
      <div className="flex justify-between text-base">
        <p>Razem do zapłaty:</p>
        <p>{formatCurrency(getTotalPrice(shoppingCartState.inCart))}</p>
      </div>
      <div className="mt-6 flex flex-col justify-center text-center">
        <Button variant="indigo">Potwierdź zakup</Button>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm">
        <p>
          lub{" "}
          <Button
            variant="indigo_link"
            onClick={() => shoppingCartDispatch({ type: "toggle_cart" })}
          >
            Kontynuuj zakupy
            <span aria-hidden="true"> &rarr;</span>
          </Button>
        </p>
      </div>
    </div>
  );
};