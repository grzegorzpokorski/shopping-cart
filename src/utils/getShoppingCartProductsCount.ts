import { ProductInCartType } from "../providers/ShoppingCartProvider";

export const getShoppingCartProductsCount = (products: ProductInCartType[]) =>
  products.reduce((sum, product) => {
    return sum + product.qty;
  }, 0);
