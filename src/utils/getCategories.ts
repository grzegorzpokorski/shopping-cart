import { ProductType } from "../context/ShoppingCartContext";

export const getCategories = (products: ProductType[]): string[] => {
  return Array.from(new Set(products.map((item) => item.category)));
};
