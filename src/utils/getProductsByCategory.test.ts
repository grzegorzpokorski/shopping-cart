import { getProductsByCategory } from "./getProductsByCategory";
import { products, categories } from "../tests/utils";

describe("getProductsByCategory()", () => {
  it("should return array of products from given category", () => {
    categories.forEach((category) => {
      const result = getProductsByCategory(products, category, categories);
      result.forEach((product) => {
        expect(product.category).toBe(category);
      });
    });
  });

  it("should return empty array if there is no products by given category", () => {
    const result = getProductsByCategory(products, "", categories);
    expect(result).toEqual([]);
  });
});
