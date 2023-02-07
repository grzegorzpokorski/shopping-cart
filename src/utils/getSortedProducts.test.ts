import { describe } from "vitest";
import {
  products,
  productsSortedByPriceASC,
  productsSortedByPriceDESC,
} from "../tests/utils";
import { getSortedProducts } from "./getSortedProducts";

describe("getSortedProducts()", () => {
  it("should return ascending sorted products by price", () => {
    expect(getSortedProducts(products, "PRICE_ASC")).toEqual(
      productsSortedByPriceASC,
    );
  });

  it("should return descending sorted products by price", () => {
    expect(getSortedProducts(products, "PRICE_DESC")).toEqual(
      productsSortedByPriceDESC,
    );
  });
});
