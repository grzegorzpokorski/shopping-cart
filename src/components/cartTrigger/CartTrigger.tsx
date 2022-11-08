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
      className="h-8 w-8 flex items-center justify-center text-2xl hover:opacity-70 transition"
      aria-label={`${
        cartIsOpen ? ariaLabelForOpened : ariaLabelForClosed
      } koszyk`}
      onClick={toggleCart}
    >
      {cartIsOpen ? <FaPlus className="rotate-45" /> : <FaShoppingBasket />}
    </button>
  );
};
