export const getTotalPrice = (products: { qty: number; price: number }[]) =>
  products.reduce((total, product) => total + product.qty * product.price, 0);
