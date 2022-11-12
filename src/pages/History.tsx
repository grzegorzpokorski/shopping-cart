import React from "react";
import { Title } from "../components/atoms/title/Title";
import { OrdersList } from "../components/organisms/ordersList/OrdersList";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const History = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <>
          <Title as="h1">Historia zakupów</Title>
          <OrdersList />
        </>
      </Layout>
    </ShoppingCartProvider>
  );
};
