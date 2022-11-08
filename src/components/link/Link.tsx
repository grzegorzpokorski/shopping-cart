import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";

type LinkProps = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, ...rest }: LinkProps) => {
  const isInternal = href && (href.startsWith("#") || href.startsWith("/"));

  return isInternal ? (
    <ReactLink to={href} {...rest}>
      {children}
    </ReactLink>
  ) : (
    <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
      {children}
    </a>
  );
};
