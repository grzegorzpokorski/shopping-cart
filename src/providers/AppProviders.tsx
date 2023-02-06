import React, { ReactNode } from "react";
import { FavouriteProvider } from "./FavouritesProvider";
import { OrdersProvider } from "./OrdersProvider";
import { ProductsProvider } from "./ProductsProvider";
import { CartProvider } from "./ShoppingCartProvider";
import { UIProvider } from "./UIProvider";

export const AppProviders = ({
  children,
}: {
  readonly children: ReactNode;
}) => (
  <UIProvider>
    <ProductsProvider>
      <FavouriteProvider>
        <OrdersProvider>
          <CartProvider>{children}</CartProvider>
        </OrdersProvider>
      </FavouriteProvider>
    </ProductsProvider>
  </UIProvider>
);
