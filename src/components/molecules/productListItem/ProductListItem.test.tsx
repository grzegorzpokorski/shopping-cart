import { render, screen } from "@testing-library/react";
import { ProductListItem } from "./ProductListItem";
import { AppProviders } from "../../../providers/AppProviders";
import data from "./../../../data/data.json";

const productData = data[0];

describe("<ProductListItem>", () => {
  beforeEach(() => {
    render(
      <AppProviders>
        <ProductListItem {...productData} />
      </AppProviders>,
    );
  });

  it("title is visible", () => {
    const item = screen.getByText(productData.name);
    expect(item).toBeVisible();
  });

  it("category is visible", () => {
    const category = screen.getByText(productData.category);
    expect(category).toBeVisible();
  });
});
