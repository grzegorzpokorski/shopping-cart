import React, { ReactNode } from "react";

type TitleProps = {
  as: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
};

export const Title = ({ as, children }: TitleProps) => {
  const AS = as;
  return <AS className="font-bold text-lg md:text-xl mb-6">{children}</AS>;
};
