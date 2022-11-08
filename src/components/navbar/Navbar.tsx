import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Cart } from "../cart/Cart";
import { CartTrigger } from "../cartTrigger/CartTrigger";
import { Logo } from "../logo/Logo";
import cn from "classnames";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  const {
    shoppingCartDispatch,
    shoppingCartState: { cartOpen },
  } = useShoppingCartContext();
  const toggleCart = () => shoppingCartDispatch({ type: "toggle_cart" });

  const cartContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartContainerRef, () => cartOpen && toggleCart());

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <section
        className={`container mx-auto px-4 flex flex-row justify-between items-center h-16 lg:h-20`}
      >
        <Logo content="Shop" isHome={isHome} isTitle={isHome} />
        <div ref={cartContainerRef}>
          <CartTrigger cartOpen={cartOpen} toggleCart={toggleCart} />
          <Cart cartOpen={cartOpen} />
        </div>
        <div
          className={cn(
            "fixed inset-0 bg-black top-16 lg:top-20 opacity-30 transition",
            { "hidden opacity-0": !cartOpen },
          )}
        ></div>
      </section>
    </nav>
  );
};
