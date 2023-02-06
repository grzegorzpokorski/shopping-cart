import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type CartItemType = {
  id: number;
  price: number;
  qty: number;
};
type ShoppingCartProviderValue = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  increaseProductQty: (id: number) => void;
  decreaseProductQty: (id: number) => void;
  clearCart: () => void;
};

const ShoppingCartContext = createContext<ShoppingCartProviderValue | null>(
  null,
);

export const CartProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [cart, setCart] = useLocalStorage<CartItemType[]>("cart", []);

  const addToCart = useCallback(
    (item: CartItemType) => {
      setCart((prev) => {
        return [...prev, item];
      });
    },
    [setCart],
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCart((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    },
    [setCart],
  );

  const increaseProductQty = useCallback(
    (id: number) => {
      setCart((prev) => {
        return [
          ...prev.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : { ...item },
          ),
        ];
      });
    },
    [setCart],
  );

  const decreaseProductQty = useCallback(
    (id: number) => {
      setCart((prev) => {
        return [
          ...prev.map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : { ...item },
          ),
        ];
      });
    },
    [setCart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      increaseProductQty,
      decreaseProductQty,
      clearCart,
    }),
    [
      addToCart,
      cart,
      clearCart,
      decreaseProductQty,
      increaseProductQty,
      removeFromCart,
    ],
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useCartContext = () => {
  const ctx = useContext(ShoppingCartContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
