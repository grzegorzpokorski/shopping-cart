import React from "react";
import { useTranslation } from "react-i18next";
import { useShoppingCartContext } from "../../../providers/ShoppingCartProvider";
import { Link } from "../../atoms/link/Link";
import { Title } from "../../atoms/title/Title";
import { OrdersList } from "../../organisms/ordersList/OrdersList";

export const HistoryOfOrders = () => {
  const { t } = useTranslation();
  const { shoppingCartState } = useShoppingCartContext();

  if (shoppingCartState.orders.length > 0) {
    return (
      <>
        <Title as="h1">{t("title.history")}</Title>
        <OrdersList orders={shoppingCartState.orders} />
      </>
    );
  }

  return (
    <p className="text-center">
      {t("info.history")}{" "}
      <Link href="/" variant="indigo">
        {t("link.go_to_the_product_list")}
      </Link>
    </p>
  );
};
