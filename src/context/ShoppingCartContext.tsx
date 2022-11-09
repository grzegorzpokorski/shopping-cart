import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import data from "../data/data.json";

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

export type ProductInCart = ProductType & {
  qty: number;
};

type ShoppingCartState = {
  products: ProductType[];
  inCart: ProductInCart[];
  cartCount: number;
  cartOpen: boolean;
};

type ShoppingCartContextType = {
  shoppingCartState: ShoppingCartState;
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
  const shoppingCartInitialState: ShoppingCartState = {
    products: data,
    inCart: [],
    cartCount: 0,
    cartOpen: false,
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

// reducer:

type ShoppingCartActionType =
  | {
      type: "add_product_to_cart";
      id: number;
    }
  | {
      type: "remove_product_from_cart";
      id: number;
    }
  | {
      type: "toggle_cart";
    };

const shoppingCartReducer = (
  prevState: ShoppingCartState,
  action: ShoppingCartActionType,
) => {
  switch (action.type) {
    case "add_product_to_cart":
      return {
        ...prevState,
        cartCount: prevState.cartCount++,
        inCart: [
          ...prevState.inCart,
          {
            ...(prevState.products.find(
              (p) => p.id == action.id,
            ) as ProductType),
            qty: 1,
          },
        ],
      };
    case "remove_product_from_cart":
      return {
        ...prevState,
        cartCount:
          prevState.cartCount -
          prevState.inCart.filter((p) => p.id === action.id)[0].qty,
        inCart: prevState.inCart.filter((p) => p.id !== action.id),
      };
    case "toggle_cart":
      return {
        ...prevState,
        cartOpen: !prevState.cartOpen,
      };
    default:
      return prevState;
  }
};
