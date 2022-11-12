import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { Order } from "../../molecules/order/Order";

export const OrdersList = () => {
  const { shoppingCartState } = useShoppingCartContext();

  if (shoppingCartState.orders.length > 0) {
    return (
      <ul className="flex flex-col gap-6">
        {shoppingCartState.orders.map((order) => (
          <Order key={order.id} {...order} />
        ))}
      </ul>
    );
  }

  return null;
};
