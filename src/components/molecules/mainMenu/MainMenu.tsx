import React from "react";
import { Link } from "../../atoms/link/Link";
import { FaStar, FaHistory } from "react-icons/fa";

export const MainMenu = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <Link href="/ulubione" className="flex flex-row items-center gap-2">
          <span className="hidden md:inline">Ulubione</span>
          <FaStar className="flex items-center justify-center text-xl" />
        </Link>
      </li>
      <li>
        <Link href="/historia" className="flex flex-row items-center gap-2">
          <span className="hidden md:inline">Historia zakupów</span>
          <FaHistory className="flex items-center justify-center text-xl" />
        </Link>
      </li>
    </ul>
  );
};
