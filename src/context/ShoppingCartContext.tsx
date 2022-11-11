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
  type: string;
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
};

export type SortByType = "PRICE_DESC" | "PRICE_ASC" | null;

export type ShoppingCartStateType = {
  products: ProductType[];
  inCart: ProductInCartType[];
  cartOpen: boolean;
  sortBy: SortByType;
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
    cartOpen: false,
    sortBy: null,
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
