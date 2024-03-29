import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import ReactFocusLock from "react-focus-lock";
import { useLocation } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { Cart } from "../../templates/cart/Cart";
import { CartTrigger } from "../../molecules/cartTrigger/CartTrigger";
import { Logo } from "../../molecules/logo/Logo";
import { MainMenu } from "../../molecules/mainMenu/MainMenu";
import { FaHistory, FaRegHeart } from "react-icons/fa";
import { useUIContext } from "../../../providers/UIProvider";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

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
                label: t("menu.favourite"),
                href: "/ulubione",
                icon: <FaRegHeart />,
              },
              {
                label: t("menu.history"),
                href: "/historia",
                icon: <FaHistory />,
              },
            ]}
          />
          <ReactFocusLock
            as="div"
            ref={cartContainerRef}
            disabled={!isCartOpen}
          >
            <CartTrigger cartOpen={isCartOpen} toggleCart={toggleCart} />
            <Cart />
          </ReactFocusLock>
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
