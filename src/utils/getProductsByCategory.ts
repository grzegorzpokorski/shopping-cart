import { ProductType } from "../context/ShoppingCartContext";

export const getProductsByCategory = (
  products: ProductType[],
  category: string,
  categories: string[],
) => {
  if (categories.includes(category)) {
    return products.filter((product) => product.category === category);
  }

  return products;
};
