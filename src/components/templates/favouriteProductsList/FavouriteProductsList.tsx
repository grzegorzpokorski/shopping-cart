import React from "react";
import { useShoppingCartContext } from "../../../providers/ShoppingCartProvider";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const FavouriteProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();
  const products = shoppingCartState.products.filter((p) =>
    shoppingCartState.favourite.includes(p.id),
  );

  if (products.length > 0) {
    return (
      <>
        <Title as="h1">Ulubione przedmioty</Title>
        <ProductsList products={products} />
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
