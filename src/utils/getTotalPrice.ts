export const getTotalPrice = (
  products: { qty: number; price: number }[],
): number => {
  const finalPrice = products.reduce(
    (total, product) => total + product.qty * product.price,
    0,
  );
  return Math.round(finalPrice * 100) / 100;
};
