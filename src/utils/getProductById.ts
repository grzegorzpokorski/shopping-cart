import { ProductType } from "../providers/ShoppingCartProvider";

export const getProductById = (id: number, products: ProductType[]) => {
  return products.find((item) => item.id === id);
};
