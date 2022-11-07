import React from "react";
import { ProductType } from "../../context/ProductsContext";
import { siteUrl } from "../../utils/getSiteUrl";

export const Product = ({
  name,
  price,
  type,
  image,
  availableAmount,
}: ProductType) => {
  return (
    <li className="flex flex-col gap-4 border-2 border-zinc-300 rounded-md p-4 hover:border-zinc-700 transition-colors duration-300">
      <figure className="w-full h-80 max-h-80 overflow-hidden relative block">
        <img
          src={`${siteUrl}${image.url}`}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="object-contain object-center w-full h-full"
        />
      </figure>
      <div className="flex flex-row justify-between">
        <div>
          <h3 className="text-md lg:text-xl font-bold">{name}</h3>
          <p>{type}</p>
        </div>
        <p>{price}</p>
      </div>
    </li>
  );
};
