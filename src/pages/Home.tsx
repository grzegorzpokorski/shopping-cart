import React from "react";
import { Layout } from "../components/templates/layout/Layout";
import { HomeProductsList } from "../components/templates/homeProductsList/HomeProductsList";

export const Home = () => {
  return (
    <Layout>
      <HomeProductsList />
    </Layout>
  );
};
