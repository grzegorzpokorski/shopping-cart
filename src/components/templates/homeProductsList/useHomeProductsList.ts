import {
  ProductType,
  SortByType,
} from "../../../providers/ShoppingCartProvider";
import { getCategories } from "../../../utils/getCategories";
import { getProductsByCategory } from "../../../utils/getProductsByCategory";
import { getSortedProducts } from "../../../utils/getSortedProducts";

export const useHomeProductsList = (
  allProducts: ProductType[],
  category: string,
  sortBy: SortByType,
) => {
  const allCategories = getCategories(allProducts);

  const sortedProducts = getSortedProducts(allProducts, sortBy);

  const productsFromCategory = getProductsByCategory(
    sortedProducts,
    category,
    allCategories,
  );

  return {
    products:
      productsFromCategory.length > 0 ? productsFromCategory : allProducts,
    categories: allCategories,
  };
};
