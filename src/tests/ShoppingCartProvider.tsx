import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../providers/ShoppingCartProvider";
import { products } from "./utils";

export const initValue: ShoppingCartContextType = {
  dispatch: vi.fn(),
  shoppingCartState: {
    products: products,
    inCart: [],
    sortBy: "DEFAULT",
    favourite: [],
    orders: [],
    category: "",
  },
};

const DummyShoppingCartProvider = ({
  value,
  children,
}: {
  value: ShoppingCartContextType;
  children: ReactNode;
}) => {
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const renderWithShoppingCartContext = (
  ui: ReactElement,
  options?: RenderOptions & { contextValue: ShoppingCartContextType },
) => {
  render(ui, {
    wrapper: (props) => (
      <DummyShoppingCartProvider
        {...props}
        value={options?.contextValue ? options.contextValue : initValue}
      />
    ),
    ...options,
  });
};
