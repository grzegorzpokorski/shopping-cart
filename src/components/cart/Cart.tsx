import React from "react";
import cn from "classnames";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

type CartProps = {
  cartOpen: boolean;
};

export const Cart = ({ cartOpen }: CartProps) => {
  const { shoppingCartState } = useShoppingCartContext();

  console.log(shoppingCartState.inCart);

  return (
    <>
      <div
        className={cn(
          "fixed right-0 bottom-0 z-10 max-w-xs md:max-w-md lg:max-w-lg w-full p-6 md:p-8 flex flex-col gap-6 overflow-y-auto bg-white shadow-md transition duration-300 ease-in-out top-16 lg:top-20 border-t-2 border-zinc-200",
          { "translate-x-0": cartOpen },
          { "translate-x-full": !cartOpen },
        )}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          recusandae itaque cumque sunt aspernatur odio incidunt libero
          similique laudantium culpa ut alias consequatur, assumenda placeat
          tenetur obcaecati perferendis officia explicabo?
        </p>
      </div>
    </>
  );
};