import React from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../atoms/button/Button";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useCartContext } from "../../../providers/ShoppingCartProvider";
import { ProductType } from "../../../providers/ProductsProvider";

type CartListItemProps = ProductType & { qty: number };

export const CartListItem = ({
  id,
  name,
  price,
  category,
  image,
  availableAmount,
  qty,
}: CartListItemProps) => {
  const { removeFromCart, increaseProductQty, decreaseProductQty } =
    useCartContext();

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
        <Button variant="indigo_link" onClick={() => removeFromCart(id)}>
          <span className="sr-only">usuń z koszyka</span>
          <FaTrashAlt aria-hidden="true" />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button
            variant="quantity_button"
            disabled={qty === 1}
            onClick={() => decreaseProductQty(id)}
          >
            <span className="sr-only">zmniejsz</span>
            <FaMinus className="text-center" />
          </Button>
          <span className="px-2 text-sm">
            {qty} z {availableAmount}
            <span className="hidden md:inline"> dostępnych</span>
          </span>
          <Button
            variant="quantity_button"
            disabled={qty === availableAmount ? true : false}
            onClick={() => increaseProductQty(id)}
          >
            <span className="sr-only">zwiększ</span>
            <FaPlus className="text-center block" />
          </Button>
        </div>
        <p className="text-sm">
          <span className="font-bold">{formatCurrency(price * qty)}</span>
          <br />
          {qty > 1 ? `za sztukę ${formatCurrency(price)}` : null}
        </p>
      </div>
    </li>
  );
};
