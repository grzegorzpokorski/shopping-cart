import React, { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import { Link as ReactLink } from "react-router-dom";

type VariantType = "default" | "indigo";

type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: VariantType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({
  href,
  children,
  variant = "default",
  ...rest
}: LinkProps) => {
  const isInternal = href && (href.startsWith("#") || href.startsWith("/"));

  const variants = {
    default: "hover:opacity-80",
    indigo: "text-indigo-600",
  };

  if (isInternal) {
    return (
      <ReactLink
        to={href}
        {...rest}
        className={cn(variants[variant], rest.className)}
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
      className={cn(variants[variant], rest.className)}
    >
      {children}
    </a>
  );
};
