import React from "react";
import { ProductType } from "../../context/ProductsContext";

export const Product = ({
  name,
  price,
  type,
  image,
  availableAmount,
}: ProductType) => {
  return (
    <li>
      <figure>
        <img
          src={image.url}
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
