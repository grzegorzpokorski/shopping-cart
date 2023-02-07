const CURRENCY_FORMATTER = new Intl.NumberFormat("pl-PL", {
  currency: "PLN",
  style: "currency",
});

export const formatCurrency = (number: number): string =>
  CURRENCY_FORMATTER.format(number);
