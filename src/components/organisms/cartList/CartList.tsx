import React from "react";
import { useProductsContext } from "../../../providers/ProductsProvider";
import { CartItemType } from "../../../providers/ShoppingCartProvider";
import { CartListItem } from "../../molecules/cartListItem/CartListItem";

type CartListProps = {
  productsInCart: CartItemType[];
};

export const CartList = ({ productsInCart }: CartListProps) => {
  const { products } = useProductsContext();

  return (
    <ul className="-my-6 divide-y divide-gray-200">
      {productsInCart.map((item) => {
        const product = products.find((p) => p.id === item.id);
        if (product)
          return <CartListItem key={item.id} {...product} qty={item.qty} />;
      })}
    </ul>
  );
};
