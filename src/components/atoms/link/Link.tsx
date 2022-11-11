import React, { AnchorHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { Link as ReactLink } from "react-router-dom";

type LinkProps = {
  href: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, children, ...rest }: LinkProps) => {
  const isInternal = href && (href.startsWith("#") || href.startsWith("/"));

  if (isInternal) {
    return (
      <ReactLink
        to={href}
        {...rest}
        className={classNames("hover:opacity-80", rest.className)}
      >
        {children}
      </ReactLink>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
      className="hover:opacity-80"
    >
      {children}
    </a>
  );
};
