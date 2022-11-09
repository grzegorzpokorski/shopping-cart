import React from "react";
import { FaShoppingBasket, FaPlus } from "react-icons/fa";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

type HamburgerProps = {
  cartOpen: boolean;
  toggleCart: () => void;
};

export const CartTrigger = ({ cartOpen, toggleCart }: HamburgerProps) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  const { shoppingCartState } = useShoppingCartContext();

  return (
    <button
      id="cartTrigger"
      className="relative h-8 w-8 flex items-center justify-center text-2xl hover:opacity-80 transition"
      aria-label={`${
        cartOpen ? ariaLabelForOpened : ariaLabelForClosed
      } koszyk`}
      onClick={toggleCart}
    >
      {cartOpen ? (
        <FaPlus className="rotate-45" aria-hidden="true" />
      ) : (
        <>
          <FaShoppingBasket aria-hidden="true" />
          <span className="absolute inset-0 object-right-top mt-0.5 -mr-6">
            <div className="inline-flex items-center px-1.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-indigo-600 text-white">
              {shoppingCartState.cartCount}
            </div>
          </span>
        </>
      )}
    </button>
  );
};
