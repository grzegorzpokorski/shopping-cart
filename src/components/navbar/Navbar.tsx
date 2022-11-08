import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { CartTrigger } from "../cartTrigger/CartTrigger";
import { Logo } from "../logo/Logo";

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

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <section
        className={`container mx-auto px-4 flex flex-row justify-between items-center h-16 lg:h-20`}
      >
        <Logo content="Shop" isHome={isHome} isTitle={isHome} />
        <div>
          <CartTrigger cartIsOpen={cartIsOpen} toggleCart={toggleCart} />
          <Cart cartIsOpen={cartIsOpen} />
        </div>
      </section>
    </nav>
  );
};
