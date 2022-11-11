import React from "react";
import { Link } from "../../atoms/link/Link";

type LogoProps = {
  isHome?: boolean;
  isTitle?: boolean;
  content: string;
};

export const Logo = ({ isHome, isTitle, content }: LogoProps) => {
  return (
    <Link
      href={`${isHome ? "#" : "/"}`}
      className="transition hover:opacity-80"
    >
      {isTitle ? (
        <h1 className="text-lg font-bold">{content}</h1>
      ) : (
        <span className="text-lg font-bold">{content}</span>
      )}
    </Link>
  );
};
