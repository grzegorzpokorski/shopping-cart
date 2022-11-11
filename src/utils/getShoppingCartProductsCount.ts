import { ProductInCart } from "../context/ShoppingCartContext";

export const getShoppingCartProductsCount = (products: ProductInCart[]) =>
  products.reduce((sum, product) => {
    return sum + product.qty;
  }, 0);
