import { screen } from "@testing-library/react";
import { CartTrigger } from "./CartTrigger";
import {
  renderWithShoppingCartContext,
  initValue,
} from "../../../tests/ShoppingCartProvider";

describe("<CartTrigger />", () => {
  it("should display 10 next to cart icon when in the cart is 10 items", () => {
    renderWithShoppingCartContext(
      <CartTrigger cartOpen={false} toggleCart={vi.fn()} />,
      {
        contextValue: {
          ...initValue,
          shoppingCartState: {
            ...initValue.shoppingCartState,
            inCart: [
              {
                id: 4,
                qty: 1,
                price: 463,
              },
              {
                id: 1,
                qty: 2,
                price: 492,
              },
              {
                id: 9,
                qty: 5,
                price: 489,
              },
              {
                id: 5,
                qty: 2,
                price: 489,
              },
            ],
          },
        },
      },
    );

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should display 0 next to cart icon when the cart is empty", () => {
    renderWithShoppingCartContext(
      <CartTrigger cartOpen={false} toggleCart={vi.fn()} />,
      {
        contextValue: {
          ...initValue,
          shoppingCartState: {
            ...initValue.shoppingCartState,
            inCart: [],
          },
        },
      },
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
