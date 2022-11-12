import React from "react";
import { useShoppingCartContext } from "../../../context/ShoppingCartContext";
import { Button } from "../../atoms/button/Button";
import { Link } from "../../atoms/link/Link";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const FavouriteProductsList = () => {
  const { shoppingCartState } = useShoppingCartContext();
  const products = shoppingCartState.products.filter((p) =>
    shoppingCartState.favourite.includes(p.id),
  );

  if (products.length > 0) {
    return <ProductsList products={products} />;
  }

  return (
    <p className="text-center">
      Nie masz ulubionych produktów.{" "}
      <Link href="/">
        <Button variant="indigo_link">Przejdź do listy produktów.</Button>
      </Link>
    </p>
  );
};
