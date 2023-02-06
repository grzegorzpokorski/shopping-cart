import React from "react";
import { useOrdersContext } from "../../../providers/OrdersProvider";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { OrdersList } from "../../organisms/ordersList/OrdersList";

export const HistoryOfOrders = () => {
  const { orders } = useOrdersContext();

  if (orders.length > 0) {
    return (
      <>
        <Title as="h1">Historia zakupów</Title>
        <OrdersList orders={orders} />
      </>
    );
  }

  return (
    <p className="text-center">
      Nie masz złożonych zamówien.{" "}
      <Link href="/" variant="indigo">
        Przejdź do listy produktów.
      </Link>
    </p>
  );
};
