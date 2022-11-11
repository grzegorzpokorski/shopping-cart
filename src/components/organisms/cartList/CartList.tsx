import React from "react";
import { ProductInCart } from "../../../context/ShoppingCartContext";

import { CartListItem } from "../../molecules/cartListItem/CartListItem";

type CartListProps = {
  products: ProductInCart[];
};

export const CartList = ({ products }: CartListProps) => {
  return (
    <ul className="-my-6 divide-y divide-gray-200">
      {products.map((product) => (
        <CartListItem key={product.id} {...product} />
      ))}
    </ul>
  );
};
