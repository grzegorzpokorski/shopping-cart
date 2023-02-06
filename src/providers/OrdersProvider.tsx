import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartItemType } from "./ShoppingCartProvider";

export type OrderType = {
  id: number;
  items: CartItemType[];
};

type OrdersProviderValue = {
  orders: OrderType[];
  placeOrder: (order: CartItemType[]) => void;
  cancelOrder: (id: number, items: CartItemType[]) => void;
};

const OrdersContext = createContext<OrdersProviderValue | null>(null);

export const OrdersProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [orders, setOrders] = useLocalStorage<OrderType[]>("orders", []);

  const placeOrder = useCallback(
    (order: CartItemType[]) => {
      setOrders((prev) => {
        return [{ id: Date.now(), items: order }, ...prev];
      });
    },
    [setOrders],
  );

  const cancelOrder = useCallback(
    (id: number) => {
      setOrders((prev) => [...prev.filter((item) => item.id !== id)]);
    },
    [setOrders],
  );

  const value = useMemo(
    () => ({
      orders,
      placeOrder,
      cancelOrder,
    }),
    [cancelOrder, orders, placeOrder],
  );

  return (
    <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
  );
};

export const useOrdersContext = () => {
  const ctx = useContext(OrdersContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
