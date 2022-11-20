import { fireEvent, render, screen } from "@testing-library/react";
import React, { ReactNode, useReducer } from "react";
import {
  ProductType,
  ShoppingCartContext,
  ShoppingCartStateType,
  useShoppingCartContext,
} from "../../../context/ShoppingCartContext";
import data from "../../../data/data.json";
import { shoppingCartReducer } from "../../../reducers/shoppingCartReducer";
import { ProductListItem } from "./ProductListItem";

const Provider = ({ children }: { children: ReactNode }) => {
  const shoppingCartInitialState: ShoppingCartStateType = {
    products: data,
    inCart: [],
    cartOpen: false,
    sortBy: "DEFAULT",
    favourite: [],
    orders: [],
    category: "all",
  };

  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState,
  );

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartState, shoppingCartDispatch }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

const Product = (props: Partial<ProductType>) => {
  const { shoppingCartState } = useShoppingCartContext();
  const itemData = shoppingCartState.products[0];

  return <ProductListItem {...itemData} {...props} />;
};

describe("test <ProductListItem />", () => {
  it("should change text on add to cart button after click it", () => {
    render(<Product />, { wrapper: Provider });
    fireEvent.click(screen.getByRole("button", { name: /ulubiony/ }));
    expect(screen.getByRole("button", { name: /ulubiony/ })).toHaveTextContent(
      "odznacz jako ulubiony",
    );
  });
  it("should display button with text 'brak towaru' when available amount of product is equal to 0", () => {
    render(<Product availableAmount={0} />, { wrapper: Provider });
    const addToCartBtn = screen.getByText(/brak towaru/i);
    expect(addToCartBtn).toBeInTheDocument();
  });
});
