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
        <p>
          {formatCurrency(
            getTotalPrice(
              shoppingCartState.inCart.map((item) => {
                const product = shoppingCartState.products.find(
                  (p) => p.id === item.id,
                );

                if (product) return { qty: item.qty, price: product.price };

                shoppingCartDispatch({
                  type: "remove_product_from_cart",
                  id: item.id,
                });
                return { qty: item.qty, price: 0 };
              }),
            ),
          )}
        </p>
      </div>
      <div className="mt-6 flex flex-col justify-center text-center">
        <Button
          variant="indigo"
          onClick={() => {
            shoppingCartState.inCart.map((item) =>
              shoppingCartDispatch({
                type: "decrease_available_amount",
                id: item.id,
                orderedAmount: item.qty,
              }),
            );
            shoppingCartDispatch({
              type: "place_order",
              order: shoppingCartState.inCart,
            });
            shoppingCartDispatch({ type: "toggle_cart" });
          }}
        >
          Złóż zamówienie
        </Button>
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
