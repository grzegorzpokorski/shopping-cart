import React from "react";
import {
  ProductInCartType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { CartListItem } from "../../molecules/cartListItem/CartListItem";

type CartListProps = {
  products: ProductInCartType[];
};

export const CartList = ({ products }: CartListProps) => {
  const { shoppingCartState } = useShoppingCartContext();

  return (
    <ul className="-my-6 divide-y divide-gray-200">
      {products.map((item) => {
        const product = shoppingCartState.products.find(
          (p) => p.id === item.id,
        );
        if (product)
          return <CartListItem key={item.id} {...product} qty={item.qty} />;
      })}
    </ul>
  );
};
