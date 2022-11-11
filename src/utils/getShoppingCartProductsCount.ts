import { ProductInCartType } from "../context/ShoppingCartContext";

export const getShoppingCartProductsCount = (products: ProductInCartType[]) =>
  products.reduce((sum, product) => {
    return sum + product.qty;
  }, 0);
