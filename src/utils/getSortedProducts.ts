import { ProductType } from "../context/ShoppingCartContext";

type ByType = "DEFAULT" | "PRICE_DESC" | "PRICE_ASC";

export const getSortedProducts = (
  products: ProductType[],
  by: ByType = "DEFAULT",
) => {
  switch (by) {
    case "PRICE_ASC":
      return products.sort((a, b) => (a.price > b.price ? 1 : -1));
    case "PRICE_DESC":
      return products.sort((a, b) => (a.price <= b.price ? 1 : -1));
    default:
      return products;
  }
};
