import { formatCurrency } from "./formatCurrency";

describe("formatCurrency()", () => {
  it("expect to get formated price", () => {
    expect(formatCurrency(100)).toEqual("100,00 zł");
  });
});
