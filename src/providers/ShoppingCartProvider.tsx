import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../data/data.json";
import {
  shoppingCartReducer,
  ShoppingCartReducerActions,
} from "../reducers/ShoppingCartReducer";

export type ProductType = (typeof data)[number];
export type ProductInCartType = Pick<ProductType, "id" | "price"> & {
  qty: number;
};
export type SortByType = "DEFAULT" | "PRICE_DESC" | "PRICE_ASC";
export type FavouriteType = number[];
export type OrderType = { id: number; items: ProductInCartType[] };
export type ShoppingCartStateType = {
  products: ProductType[];
  inCart: ProductInCartType[];
  sortBy: SortByType;
  favourite: FavouriteType;
  orders: OrderType[];
  category: string;
};
type ShoppingCartContextType = {
  shoppingCartState: ShoppingCartStateType;
  dispatch: (action: ShoppingCartReducerActions) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCartContext = () => {
  const ctx = useContext(ShoppingCartContext);
  if (!ctx) throw Error("Missing data in ShoppingCartContext!");
  return ctx;
};

export const ShoppingCartProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const shoppingCartInitialState: ShoppingCartStateType = {
    products: data,
    inCart: [],
    sortBy: "DEFAULT",
    favourite: [],
    orders: [],
    category: "all",
  };

  const [initState, setInitState] = useLocalStorage(
    "app:state",
    shoppingCartInitialState,
  );

  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initState,
  );

  useEffect(() => {
    setInitState(shoppingCartState);
  }, [setInitState, shoppingCartState]);

  const dispatch = useCallback((action: ShoppingCartReducerActions) => {
    shoppingCartDispatch(action);
  }, []);

  const value = useMemo(
    () => ({ shoppingCartState, dispatch }),
    [dispatch, shoppingCartState],
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
