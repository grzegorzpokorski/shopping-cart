import React from "react";
import { Button } from "../../atoms/button/Button";
import { useUIContext } from "../../../providers/UIProvider";
import { useTranslation } from "react-i18next";

export const EmptyCart = () => {
  const { t } = useTranslation();
  const { toggleCart } = useUIContext();

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p>{t("info.empty_cart")}</p>
      <Button onClick={toggleCart}>{t("button.continue_shopping")}</Button>
    </div>
  );
};
