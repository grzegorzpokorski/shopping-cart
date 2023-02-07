import { ProductType } from "../providers/ShoppingCartProvider";

export const getCategories = (products: ProductType[]): string[] => {
  return Array.from(new Set(products.map((item) => item.category)));
};
