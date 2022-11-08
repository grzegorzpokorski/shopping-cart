import React from "react";
import { FaShoppingBasket, FaPlus } from "react-icons/fa";

type HamburgerProps = {
  cartIsOpen: boolean;
  toggleCart: () => void;
};

export const CartTrigger = ({ cartIsOpen, toggleCart }: HamburgerProps) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  return (
    <button
      id="cartTrigger"
      className="relative h-8 w-8 flex items-center justify-center text-2xl hover:opacity-70 transition"
      aria-label={`${
        cartIsOpen ? ariaLabelForOpened : ariaLabelForClosed
      } koszyk`}
      onClick={toggleCart}
    >
      {cartIsOpen ? (
        <FaPlus className="rotate-45" />
      ) : (
        <>
          <FaShoppingBasket />
          <span className="absolute inset-0 object-right-top mt-0.5 -mr-6">
            <div className="inline-flex items-center px-1.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              12
            </div>
          </span>
        </>
      )}
    </button>
  );
};
