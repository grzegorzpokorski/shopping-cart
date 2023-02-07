import React from "react";
import {
  ProductInCartType,
  ProductType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { useUIContext } from "../../../providers/UIProvider";
import { formatCurrency } from "../../../utils/formatCurrency";
import { getProductById } from "../../../utils/getProductById";
import { getTotalPrice } from "../../../utils/getTotalPrice";
import { Button } from "../../atoms/button/Button";

export const CartSummary = () => {
  const { shoppingCartState, dispatch } = useShoppingCartContext();
  const { toggleCart } = useUIContext();

  const bindCartItemsWithPrices = (
    inCart: ProductInCartType[],
    products: ProductType[],
  ) => {
    const cartItemsWithPrices = inCart.map((cartItem) => {
      const product = getProductById(cartItem.id, products);

      if (!product) {
        return { ...cartItem, price: 0 };
      }

      return { ...cartItem, price: product.price };
    });

    return cartItemsWithPrices;
  };

  return (
    <div className="flex flex-col justify-end border-t border-zinc-200 py-6">
      <div className="flex justify-between text-base">
        <p>Razem do zapłaty:</p>
        <p>
          {formatCurrency(
            getTotalPrice(
              bindCartItemsWithPrices(
                shoppingCartState.inCart,
                shoppingCartState.products,
              ),
            ),
          )}
        </p>
      </div>
      <div className="mt-6 flex flex-col justify-center text-center">
        <Button
          variant="indigo"
          onClick={() => {
            shoppingCartState.inCart.map((item) =>
              dispatch({
                type: "decrease_available_amount",
                id: item.id,
                orderedAmount: item.qty,
              }),
            );
            dispatch({
              type: "place_order",
              order: shoppingCartState.inCart,
            });
            toggleCart();
          }}
        >
          Złóż zamówienie
        </Button>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm">
        <p>
          lub{" "}
          <Button variant="indigo_link" onClick={toggleCart}>
            Kontynuuj zakupy
            <span aria-hidden="true"> &rarr;</span>
          </Button>
        </p>
      </div>
    </div>
  );
};
