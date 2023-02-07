import React from "react";
import { OrderType } from "../../../providers/ShoppingCartProvider";
import { Order } from "../../molecules/order/Order";

type OrdersType = {
  orders: OrderType[];
};

export const OrdersList = ({ orders }: OrdersType) => {
  return (
    <ul className="flex flex-col gap-6">
      {orders.map((order) => (
        <Order key={order.id} {...order} />
      ))}
    </ul>
  );
};
