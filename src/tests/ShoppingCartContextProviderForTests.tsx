import React, { ReactNode, useReducer } from "react";
import {
  ShoppingCartContext,
  ShoppingCartStateType,
} from "../context/ShoppingCartContext";
import data from "../data/data.json";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";

export const ShoppingCartContextProviderForTests = ({
  children,
  initialState = defaultInitialState,
}: {
  children: ReactNode;
  initialState?: ShoppingCartStateType;
}) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initialState,
  );

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartState, shoppingCartDispatch }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const defaultInitialState: ShoppingCartStateType = {
  products: data,
  inCart: [],
  cartOpen: false,
  sortBy: "DEFAULT",
  favourite: [],
  orders: [],
  category: "all",
};
