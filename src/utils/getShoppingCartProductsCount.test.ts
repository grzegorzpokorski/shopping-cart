import { getShoppingCartProductsCount } from "./getShoppingCartProductsCount";

const items = [
  {
    id: 1,
    qty: 4,
    price: 492,
  },
  {
    id: 4,
    qty: 13,
    price: 463,
  },
  {
    id: 5,
    qty: 7,
    price: 499,
  },
  {
    id: 3,
    qty: 2,
    price: 599,
  },
  {
    id: 2,
    qty: 1,
    price: 499,
  },
];

describe("getShoppingCartProductsCount()", () => {
  it("should return qty of items in cart", () => {
    expect(getShoppingCartProductsCount(items)).toEqual(27);
  });
});
