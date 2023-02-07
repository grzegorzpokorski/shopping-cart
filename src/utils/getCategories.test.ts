import { products } from "../tests/utils";
import { getCategories } from "./getCategories";

const categories = ["mysz", "klawiatura"];

describe("getCategories", () => {
  it("returns categories that are not repeated(", () => {
    expect(getCategories(products)).toEqual(categories);
  });
});
