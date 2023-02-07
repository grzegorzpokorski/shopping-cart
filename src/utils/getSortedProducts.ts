import { ProductType, SortByType } from "../providers/ShoppingCartProvider";

export const getSortedProducts = (products: ProductType[], by: SortByType) => {
  switch (by) {
    case "PRICE_ASC":
      return products.sort((a, b) => (a.price > b.price ? 1 : -1));
    case "PRICE_DESC":
      return products.sort((a, b) => (a.price <= b.price ? 1 : -1));
    default:
      return products;
  }
};
