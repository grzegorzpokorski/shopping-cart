import React from "react";
import { FaShoppingBasket, FaPlus } from "react-icons/fa";
import { useShoppingCartContext } from "../../../providers/ShoppingCartProvider";
import { getShoppingCartProductsCount } from "../../../utils/getShoppingCartProductsCount";
import { Button } from "../../atoms/button/Button";

type CartTriggerType = {
  cartOpen: boolean;
  toggleCart: () => void;
};

export const CartTrigger = ({ cartOpen, toggleCart }: CartTriggerType) => {
  const ariaLabelForOpened = "Zamknij";
  const ariaLabelForClosed = "Otwórz";

  const { shoppingCartState } = useShoppingCartContext();

  return (
    <Button
      variant="cart_trigger"
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
              {getShoppingCartProductsCount(shoppingCartState.inCart)}
            </div>
          </span>
        </>
      )}
    </Button>
  );
};
