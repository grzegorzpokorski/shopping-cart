import { ProductsList } from "./ProductsList";
import { products } from "../../../tests/utils";
import { render } from "@testing-library/react";
import { AppProviders } from "../../../providers/AppProviders";

describe("<ProductsList />", () => {
  it("should display all passed products", () => {
    const { container } = render(
      <AppProviders>
        <ProductsList products={products} />
      </AppProviders>,
    );
    const items = container.querySelectorAll("ul > li");

    expect(items.length).toBe(products.length);
  });
});
