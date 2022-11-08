import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Cart } from "../cart/Cart";
import { CartTrigger } from "../cartTrigger/CartTrigger";
import { Logo } from "../logo/Logo";
import cn from "classnames";

export const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const toggleCart = () => setCartIsOpen((v) => !v);

  const cartContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartContainerRef, () => cartIsOpen && toggleCart());

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <section
        className={`container mx-auto px-4 flex flex-row justify-between items-center h-16 lg:h-20`}
      >
        <Logo content="Shop" isHome={isHome} isTitle={isHome} />
        <div ref={cartContainerRef}>
          <CartTrigger cartIsOpen={cartIsOpen} toggleCart={toggleCart} />
          <Cart cartIsOpen={cartIsOpen} />
        </div>
        <div
          className={cn(
            "fixed inset-0 bg-black top-16 lg:top-20 opacity-30 transition",
            { "hidden opacity-0": !cartIsOpen },
          )}
        ></div>
      </section>
    </nav>
  );
};
