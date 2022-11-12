import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { Button } from "../../atoms/button/Button";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { OrdersList } from "../../organisms/ordersList/OrdersList";

export const HistoryOfOrders = () => {
  const { shoppingCartState } = useShoppingCartContext();

  if (shoppingCartState.orders.length > 0) {
    return (
      <>
        <Title as="h1">Historia zakupów</Title>
        <OrdersList orders={shoppingCartState.orders} />
      </>
    );
  }

  return (
    <p className="text-center">
      Nie masz złożonych zamówien.{" "}
      <Link href="/">
        <Button variant="indigo_link">Przejdź do listy produktów.</Button>
      </Link>
    </p>
  );
};
