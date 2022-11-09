import React from "react";
import {
  ProductInCart,
  useShoppingCartContext,
} from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../button/Button";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

type CartListProps = {
  products: ProductInCart[];
};

export const CartList = ({ products }: CartListProps) => {
  const { shoppingCartDispatch } = useShoppingCartContext();

  return (
    <ul className="-my-6 divide-y divide-gray-200">
      {products.map((product) => (
        <li className="flex flex-col gap-4 py-6" key={product.id}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4 items-center">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded border border-gray-200">
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  height={product.image.height}
                  width={product.image.width}
                />
              </div>
              <div className="flex flex-col text-sm text-gray-900">
                <h3 className="font-bold">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.type}</p>
              </div>
            </div>
            <Button
              variant="indigo_link"
              onClick={() =>
                shoppingCartDispatch({
                  type: "remove_product_from_cart",
                  id: product.id,
                })
              }
            >
              <span className="sr-only">usuń z koszyka</span>
              <FaTrashAlt aria-hidden="true" />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Button variant="cart" disabled={product.qty === 1}>
                <span className="sr-only">zmniejsz</span>
                <FaMinus className="text-center" />
              </Button>
              <span className="px-2 text-sm">
                {product.qty}{" "}
                <span className="hidden md:inline">
                  {" "}
                  z {product.availableAmount} dostępnych
                </span>
              </span>
              <Button variant="cart" disabled={product.availableAmount === 1}>
                <span className="sr-only">zwiększ</span>
                <FaPlus className="text-center block" />
              </Button>
            </div>
            <p className="text-sm">
              <span className="font-bold">
                {formatCurrency(product.price * product.qty)}
              </span>
              <br />
              {product.qty > 1
                ? `za sztukę ${formatCurrency(product.price)}`
                : null}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
