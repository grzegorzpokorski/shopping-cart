import React from "react";
import { useFavouriteContext } from "../../../providers/FavouritesProvider";
import { useProductsContext } from "../../../providers/ProductsProvider";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const FavouriteProductsList = () => {
  const { products } = useProductsContext();
  const { favourite } = useFavouriteContext();
  const toDisplay = products.filter((p) => favourite.includes(p.id));

  if (toDisplay.length > 0) {
    return (
      <>
        <Title as="h1">Ulubione przedmioty</Title>
        <ProductsList products={toDisplay} />
      </>
    );
  }

  return (
    <p className="text-center">
      Nie masz ulubionych produktów.{" "}
      <Link href="/" variant="indigo">
        Przejdź do listy produktów
      </Link>
    </p>
  );
};
