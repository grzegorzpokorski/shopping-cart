import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import {
  ProductType,
  useShoppingCartContext,
} from "../../../context/ShoppingCartContext";
import { ShoppingCartContextProviderForTests } from "../../../tests/ShoppingCartContextProviderForTests";
import { ProductListItem } from "./ProductListItem";

const Product = (props: Partial<ProductType>) => {
  const { shoppingCartState } = useShoppingCartContext();
  const itemData = shoppingCartState.products[0];

  return <ProductListItem {...itemData} {...props} />;
};

describe("test <ProductListItem />", () => {
  it("should change text on add to cart button after click it", () => {
    render(<Product />, { wrapper: ShoppingCartContextProviderForTests });
    fireEvent.click(screen.getByRole("button", { name: /ulubiony/ }));
    expect(screen.getByRole("button", { name: /ulubiony/ })).toHaveTextContent(
      "odznacz jako ulubiony",
    );
  });
  it("should display button with text 'brak towaru' when available amount of product is equal to 0", () => {
    render(<Product availableAmount={0} />, {
      wrapper: ShoppingCartContextProviderForTests,
    });
    const addToCartBtn = screen.getByText(/brak towaru/i);
    expect(addToCartBtn).toBeInTheDocument();
  });
});
