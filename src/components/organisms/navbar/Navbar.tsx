import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { Cart } from "../../templates/cart/Cart";
import { CartTrigger } from "../../molecules/cartTrigger/CartTrigger";
import { Logo } from "../../molecules/logo/Logo";
import cn from "classnames";
import { MainMenu } from "../../molecules/mainMenu/MainMenu";
import { FaHistory, FaRegHeart } from "react-icons/fa";
import { useUIContext } from "../../../providers/UIProvider";

export const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  const { isCartOpen, toggleCart } = useUIContext();

  const cartContainerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartContainerRef, () => isCartOpen && toggleCart());

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <section
        className={`container mx-auto px-4 flex flex-row justify-between items-center h-16 lg:h-20`}
      >
        <Logo content="Shop" isHome={isHome} isTitle={isHome} />
        <div className="flex flex-row gap-4 items-center">
          <MainMenu
            items={[
              {
                label: "Ulubione",
                href: "/ulubione",
                icon: <FaRegHeart />,
              },
              {
                label: "Historia zakupów",
                href: "/historia",
                icon: <FaHistory />,
              },
            ]}
          />
          <div ref={cartContainerRef}>
            <CartTrigger cartOpen={isCartOpen} toggleCart={toggleCart} />
            <Cart />
          </div>
          <div
            className={cn(
              "fixed inset-0 bg-black top-16 lg:top-20 opacity-50 transition",
              { "hidden opacity-0": !isCartOpen },
            )}
          ></div>
        </div>
      </section>
    </nav>
  );
};
