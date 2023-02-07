import { products } from "../tests/utils";
import { getProductById } from "./getProductById";

describe("getProductById()", () => {
  it("return appropriate product by given id", () => {
    expect(getProductById(1, products)).toEqual({
      id: 1,
      name: "Logitech MX Keys for mac",
      price: 492,
      category: "klawiatura",
      image: {
        url: "/images/logitech-mx-keys-mac.jpg",
        height: 514,
        width: 580,
        alt: "szaro-grafitowa klawiatura logitech mx keys mac ukazana z profilu",
      },
      availableAmount: 5,
    });
  });

  it("return undefined when product not exists with given id", () => {
    expect(getProductById(10, products)).toEqual(undefined);
  });
});
