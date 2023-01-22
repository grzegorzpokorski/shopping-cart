import React from "react";
import { FavouriteProductsList } from "../components/templates/favouriteProductsList/FavouriteProductsList";
import { Layout } from "../components/templates/layout/Layout";

export const Favorite = () => {
  return (
    <Layout>
      <FavouriteProductsList />
    </Layout>
  );
};
