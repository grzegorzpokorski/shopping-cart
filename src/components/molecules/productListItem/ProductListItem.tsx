import React from "react";
import { siteUrl } from "../../../utils/getSiteUrl";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../atoms/button/Button";
import {
  ProductType,
  useShoppingCartContext,
} from "../../../providers/ShoppingCartProvider";
import { FavouriteTrigger } from "../favouriteTrigger/FavouriteTrigger";
import { useUIContext } from "../../../providers/UIProvider";

export const ProductListItem = ({
  id,
  name,
  price,
  category,
  image,
  availableAmount,
}: ProductType) => {
  const { shoppingCartState, dispatch } = useShoppingCartContext();
  const { toggleCart } = useUIContext();

  const ProductIsInCart = shoppingCartState.inCart
    .map((p) => p.id)
    .includes(id);

  return (
    <li className="flex flex-col gap-4 justify-between border-2 border-zinc-200 bg-white p-4 rounded group">
      <div className="w-full h-80 max-h-80 overflow-hidden relative block">
        <img
          src={`${siteUrl}${image.url}`}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="object-contain object-center w-full h-full group-hover:scale-[1.025] transition duration-300"
        />
        <FavouriteTrigger
          checked={shoppingCartState.favourite.includes(id)}
          onClick={() => dispatch({ type: "toggle_favourite", id })}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-md lg:text-xl font-bold">{name}</h3>
          <p>{category}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{formatCurrency(price)}</p>
          {ProductIsInCart ? (
            <Button onClick={toggleCart} variant="indigo">
              Zobacz w koszyku
            </Button>
          ) : (
            <Button
              disabled={Boolean(!availableAmount)}
              onClick={() =>
                dispatch({
                  type: "add_product_to_cart",
                  id,
                  price,
                })
              }
            >
              {availableAmount ? "Dodaj do koszyka" : "Brak towaru"}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};
