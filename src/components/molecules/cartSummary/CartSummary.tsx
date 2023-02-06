import React from "react";
import { useOrdersContext } from "../../../providers/OrdersProvider";
import { useProductsContext } from "../../../providers/ProductsProvider";
import { useCartContext } from "../../../providers/ShoppingCartProvider";
import { useUIContext } from "../../../providers/UIProvider";
// import { formatCurrency } from "../../../utils/formatCurrency";
// import { getTotalPrice } from "../../../utils/getTotalPrice";
import { Button } from "../../atoms/button/Button";

export const CartSummary = () => {
  const { toggleCart } = useUIContext();
  const { cart, clearCart } = useCartContext();
  const { placeOrder } = useOrdersContext();
  const { decreaseAvailableAmount } = useProductsContext();

  return (
    <div className="flex flex-col justify-end border-t border-zinc-200 py-6">
      <div className="flex justify-between text-base">
        <p>Razem do zapłaty:</p>
        <p>
          {}
          {/* {formatCurrency(
            getTotalPrice(
              cart.map((item) => {
                const product = products.find((p) => p.id === item.id);

                if (product) return { qty: item.qty, price: product.price };

                shoppingCartDispatch({
                  type: "remove_product_from_cart",
                  id: item.id,
                });
                return { qty: item.qty, price: 0 };
              }),
            ), 
          )} */}
        </p>
      </div>
      <div className="mt-6 flex flex-col justify-center text-center">
        <Button
          variant="indigo"
          onClick={() => {
            placeOrder(cart);
            clearCart();
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
