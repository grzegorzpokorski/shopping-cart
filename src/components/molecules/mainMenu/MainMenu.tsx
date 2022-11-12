import React from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { Link } from "../../atoms/link/Link";

type MainMenuProps = {
  items: {
    label: string;
    href: string;
    icon?: JSX.Element;
  }[];
};

export const MainMenu = ({ items }: MainMenuProps) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <ul className="flex items-center gap-5">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={cn("flex flex-row items-center gap-2", {
              "text-indigo-600": pathname === item.href,
            })}
          >
            <span className="hidden md:inline">{item.label}</span>
            <span className="sr-only md:hidden">{item.label}</span>
            <span className="flex items-center justify-center text-xl inline md:hidden">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
