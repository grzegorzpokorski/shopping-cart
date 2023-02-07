import { getTotalPrice } from "./getTotalPrice";

const items = [
  {
    qty: 2,
    price: 1.25,
  },
  {
    qty: 1,
    price: 156,
  },
  {
    qty: 20,
    price: 10,
  },
  {
    qty: 56,
    price: 10.2,
  },
];

console.log(getTotalPrice(items));

describe("getTotalPrice()", () => {
  it("should return total price by given items", () => {
    expect(getTotalPrice(items)).toEqual(929.7);
  });
});
