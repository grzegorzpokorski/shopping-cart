import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import productsFromJSON from "../data/data.json";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ProductType = (typeof productsFromJSON)[number];

type ProductsProviderValue = {
  products: ProductType[];
  updateProduct: (item: ProductType) => void;
};

const ProductsContext = createContext<ProductsProviderValue | null>(null);

export const ProductsProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [products, setProducts] = useLocalStorage("products", productsFromJSON);

  const updateProduct = useCallback(
    (item: ProductType) => {
      setProducts([
        ...products.map((product) => (product.id === item.id ? item : product)),
      ]);
    },
    [products, setProducts],
  );

  const value = useMemo(
    () => ({
      products,
      updateProduct,
    }),
    [products, updateProduct],
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const ctx = useContext(ProductsContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
