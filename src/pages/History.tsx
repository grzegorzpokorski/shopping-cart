import React from "react";
import { HistoryOfOrders } from "../components/templates/historyOfOrders/HistoryOfOrders";
import { Layout } from "../components/templates/layout/Layout";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

export const History = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <HistoryOfOrders />
      </Layout>
    </ShoppingCartProvider>
  );
};
