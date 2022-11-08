import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";

type LinkProps = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <ReactLink to={href} {...rest}>
      {children}
    </ReactLink>
  );
};
