import React from "react";
import { ProductType } from "../../context/ProductsContext";
import { siteUrl } from "../../utils/getSiteUrl";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../button/Button";

export const Product = ({
  name,
  price,
  type,
  image,
  availableAmount,
}: ProductType) => {
  return (
    <li className="flex flex-col gap-4 justify-between border-2 border-zinc-200 p-4">
      <figure className="w-full h-80 max-h-80 overflow-hidden relative block">
        <img
          src={`${siteUrl}${image.url}`}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="object-contain object-center w-full h-full"
        />
      </figure>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-md lg:text-xl font-bold">{name}</h3>
          <p>{type}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{formatCurrency(price)}</p>
          <Button
            text={availableAmount ? "Dodaj do koszyka" : "Brak towaru"}
            disabled={Boolean(!availableAmount)}
          />
        </div>
      </div>
    </li>
  );
};
