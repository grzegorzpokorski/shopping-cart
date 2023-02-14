import React from "react";
import { useTranslation } from "react-i18next";
import { useShoppingCartContext } from "../../../providers/ShoppingCartProvider";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { ProductsList } from "../../organisms/productsList/ProductsList";

export const FavouriteProductsList = () => {
  const { t } = useTranslation();
  const { shoppingCartState } = useShoppingCartContext();
  const products = shoppingCartState.products.filter((p) =>
    shoppingCartState.favourite.includes(p.id),
  );

  if (products.length > 0) {
    return (
      <>
        <Title as="h1">{t("title.favourite")}</Title>
        <ProductsList products={products} />
      </>
    );
  }

  return (
    <p className="text-center">
      {t("info.favourite")}{" "}
      <Link href="/" variant="indigo">
        {t("link.go_to_the_product_list")}
      </Link>
    </p>
  );
};
