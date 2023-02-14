import React from "react";
import {
  ProductInCartType,
  ProductType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../atoms/button/Button";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type CartListItemProps = ProductType & Pick<ProductInCartType, "qty">;

export const CartListItem = ({
  id,
  name,
  price,
  category,
  image,
  availableAmount,
  qty,
}: CartListItemProps) => {
  const { dispatch } = useShoppingCartContext();
  const { t } = useTranslation();

  return (
    <li className="flex flex-col gap-4 py-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <picture className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-gray-200">
            <img
              src={image.url}
              alt={image.alt}
              height={image.height}
              width={image.width}
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="flex flex-col text-sm text-gray-900">
            <h3 className="font-bold">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
        </div>
        <Button
          variant="indigo_link"
          onClick={() =>
            dispatch({
              type: "remove_product_from_cart",
              id: id,
            })
          }
        >
          <span className="sr-only">{t("button.remove_from_basket")}</span>
          <FaTrashAlt aria-hidden="true" />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button
            variant="quantity_button"
            disabled={qty === 1}
            onClick={() =>
              dispatch({
                type: "decrease_product_qty_in_cart",
                id: id,
              })
            }
          >
            <span className="sr-only">{t("button.decrease")}</span>
            <FaMinus className="text-center" />
          </Button>
          <span className="px-2 text-sm">
            {qty} {t("of")} {availableAmount}
            <span className="hidden md:inline"> {t("available")}</span>
          </span>
          <Button
            variant="quantity_button"
            disabled={qty === availableAmount ? true : false}
            onClick={() =>
              dispatch({
                type: "increase_product_qty_in_cart",
                id: id,
              })
            }
          >
            <span className="sr-only">{t("button.increase")}</span>
            <FaPlus className="text-center block" />
          </Button>
        </div>
        <p className="text-sm">
          <span className="font-bold">{formatCurrency(price * qty)}</span>
          <br />
          {qty > 1 ? `${t("per_item")} ${formatCurrency(price)}` : null}
        </p>
      </div>
    </li>
  );
};
