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
  console.log(image);
  return (
    <li>
      <figure>
        <img
          src={`${siteUrl}${image.url}`}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      </figure>
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{price}</p>
    </li>
  );
};
