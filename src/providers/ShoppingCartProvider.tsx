import { z } from "zod";
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
export type ShoppingCartContextType = {
  shoppingCartState: ShoppingCartStateType;
  dispatch: (action: ShoppingCartReducerActions) => void;
};

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);

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
  const shoppingCartStateShema = z
    .object({
      products: z
        .array(
          z.object({
            id: z.number().nonnegative().int(),
            name: z.string(),
            price: z.number().positive(),
            category: z.string(),
            image: z.object({
              url: z
                .string()
                .regex(/^\/{1}(images)\/{1}.+[.]{1}(jpg|png|webp|gif|jpeg)$/),
              height: z.number().int().positive(),
              width: z.number().int().positive(),
              alt: z.string(),
            }),
            availableAmount: z.number().int().nonnegative(),
          }),
        )
        .nonempty(),
      inCart: z.array(
        z.object({
          id: z.number().nonnegative().int(),
          price: z.number().positive(),
          qty: z.number().positive().int(),
        }),
      ),
      sortBy: z.enum(["DEFAULT", "PRICE_DESC", "PRICE_ASC"]),
      favourite: z.array(z.number().nonnegative().int()),
      orders: z.array(
        z.object({
          id: z.number().nonnegative().int(),
          items: z
            .array(
              z.object({
                id: z.number().nonnegative().int(),
                price: z.number().positive(),
                qty: z.number().positive().int(),
              }),
            )
            .nonempty(),
        }),
      ),
      category: z.enum(["klawiatura", "mysz", ""]),
    })
    .required();

  const shoppingCartInitialState: ShoppingCartStateType = {
    products: data,
    inCart: [],
    sortBy: "DEFAULT",
    favourite: [],
    orders: [],
    category: "",
  };

  const [initState, setInitState] = useLocalStorage(
    "app:state",
    shoppingCartInitialState,
    shoppingCartStateShema,
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
