import React, { useEffect } from "react";
import cn from "classnames";
import { CartList } from "../../organisms/cartList/CartList";
import { EmptyCart } from "../../molecules/emptyCart/EmptyCart";
import { CartSummary } from "../../molecules/cartSummary/CartSummary";
import { useUIContext } from "../../../providers/UIProvider";
import { useCartContext } from "../../../providers/ShoppingCartProvider";

export const Cart = () => {
  const { cart } = useCartContext();
  const { isCartOpen } = useUIContext();

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCartOpen]);

  return (
    <>
      <div
        className={cn(
          "fixed right-0 bottom-0 z-10 max-w-xs md:max-w-md lg:max-w-lg w-full p-6 md:p-8 flex flex-col gap-6 overflow-y-auto bg-white shadow-md transition duration-300 ease-in-out top-16 lg:top-20 border-t-2 border-zinc-200",
          { "translate-x-0": isCartOpen },
          { "translate-x-full": !isCartOpen },
        )}
      >
        <h2 className="text-lg font-bold text-center mb-2 border-b-2 pb-6 md:pb-8">
          {cart.length > 0 ? "Zawartość koszyka" : "Twoj koszyk jest pusty"}
        </h2>
        {cart.length > 0 ? (
          <>
            <CartList productsInCart={cart} />
            <CartSummary />
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};
