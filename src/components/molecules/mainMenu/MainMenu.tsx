import React from "react";
import { Link } from "../../atoms/link/Link";

type MainMenuProps = {
  items: {
    label: string;
    href: string;
    icon?: JSX.Element;
  }[];
};

export const MainMenu = ({ items }: MainMenuProps) => {
  return (
    <ul className="flex items-center gap-5">
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="flex flex-row items-center gap-2">
            <span className="hidden md:inline">{item.label}</span>
            <span className="flex items-center justify-center text-xl inline md:hidden">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
