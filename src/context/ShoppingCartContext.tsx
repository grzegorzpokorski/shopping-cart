import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../data/data.json";
import {
  ShoppingCartActionType,
  shoppingCartReducer,
} from "../reducers/shoppingCartReducer";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: {
    url: string;
    height: number;
    width: number;
    alt: string;
  };
  availableAmount: number;
};

export type ProductInCartType = {
  id: number;
  qty: number;
  price: number;
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
  shoppingCartDispatch: React.Dispatch<ShoppingCartActionType>;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCartContext = () => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  if (!shoppingCartContext) throw Error("Missing data in ShoppingCartContext!");
  return shoppingCartContext;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const shoppingCartInitialState: ShoppingCartStateType = {
    products: data,
    inCart: [],
    sortBy: "DEFAULT",
    favourite: [],
    orders: [],
    category: "all",
  };

  const [appState, setAppState] = useLocalStorage(
    "app:state",
    shoppingCartInitialState,
  );

  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    appState,
  );

  useEffect(() => {
    setAppState(shoppingCartState);
  }, [setAppState, shoppingCartState]);

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartState, shoppingCartDispatch }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
