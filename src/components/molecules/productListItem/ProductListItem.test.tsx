import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import {
  ProductType,
  useShoppingCartContext,
  ShoppingCartProvider,
} from "../../../context/ShoppingCartContext";
import { ProductListItem } from "./ProductListItem";

const Product = (props: Partial<ProductType>) => {
  const { shoppingCartState } = useShoppingCartContext();
  const itemData = shoppingCartState.products[0];

  return <ProductListItem {...itemData} {...props} />;
};

describe("test <ProductListItem />", () => {
  it("should change text on add to cart button after click it", () => {
    render(<Product />, { wrapper: ShoppingCartProvider });
    const toggleFavouriteBtn = screen.getByRole("button", { name: /ulubiony/ });
    fireEvent.click(toggleFavouriteBtn);
    expect(toggleFavouriteBtn).toHaveTextContent("odznacz jako ulubiony");
  });

  it("should display button with text 'zobacz w koszyku' after add item to cart", () => {
    render(<Product availableAmount={1} />, {
      wrapper: ShoppingCartProvider,
    });
    const addToCartBtn = screen.getByRole("button", {
      name: /dodaj do koszyka/i,
    });
    fireEvent.click(addToCartBtn);
    const seeInCartBtn = screen.getByRole("button", {
      name: /zobacz w koszyku/i,
    });
    expect(seeInCartBtn).toBeInTheDocument();
  });

  it("should display button with 'brak towaru' text when available amount of item is equal to 0", () => {
    render(<Product id={2} availableAmount={0} />, {
      wrapper: ShoppingCartProvider,
    });
    const btn = screen.getByText(/brak towaru/i);
    expect(btn).toBeInTheDocument();
  });
});
