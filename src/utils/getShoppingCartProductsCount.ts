import { CartItemType } from "../providers/ShoppingCartProvider";

export const getShoppingCartProductsCount = (products: CartItemType[]) =>
  products.reduce((sum, product) => {
    return sum + product.qty;
  }, 0);
