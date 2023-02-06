import React, { ReactNode } from "react";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import { UIProvider } from "./UIProvider";

export const AppProviders = ({
  children,
}: {
  readonly children: ReactNode;
}) => (
  <UIProvider>
    <ShoppingCartProvider>{children}</ShoppingCartProvider>
  </UIProvider>
);
