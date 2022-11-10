import { ProductInCart } from "../context/ShoppingCartContext";

export const getTotalPrice = (products: ProductInCart[]) =>
  products.reduce((total, product) => total + product.qty * product.price, 0);
