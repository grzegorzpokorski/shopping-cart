import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductListItem } from "./ProductListItem";
import { AppProviders } from "../../../providers/AppProviders";
import { ProductType } from "../../../providers/ShoppingCartProvider";

const product = {
  id: 0,
  name: "Logitech M330 silent",
  price: 149.99,
  category: "mysz",
  image: {
    url: "/images/logitech-m330-silent.jpg",
    height: 532,
    width: 600,
    alt: "czarna myszka logitech m330 silent ukazana z góry",
  },
  availableAmount: 1,
};
const unavailableProduct = { ...product, availableAmount: 0 };

describe("<ProductListItem>", () => {
  const renderItem = (productData: ProductType) => {
    render(
      <AppProviders>
        <ProductListItem {...productData} />
      </AppProviders>,
    );
  };

  it("there is unable to add product to cart when available amount of it is equal to 0", () => {
    renderItem(unavailableProduct);

    const button = screen.getByText("Brak towaru");
    expect(button).toBeVisible();
  });

  it("title is visible", () => {
    renderItem(product);

    const item = screen.getByText(product.name);
    expect(item).toBeVisible();
  });

  it("category is visible", () => {
    renderItem(product);

    const category = screen.getByText(product.category);
    expect(category).toBeVisible();
  });

  it("formated price is visible", () => {
    renderItem(product);

    expect(screen.getByText("149,99 zł")).toBeVisible();
  });

  it("there is able to add product to cart", async () => {
    renderItem(product);

    const user = userEvent.setup();
    const addToCartButton = screen.getByText("Dodaj do koszyka");

    if (addToCartButton) {
      await user.click(addToCartButton);
      expect(addToCartButton.textContent).toBe("Zobacz w koszyku");
    }
  });
});
