import React, { useId } from "react";
import {
  SortByType,
  useShoppingCartContext,
} from "../../../context/ShoppingCartContext";

type SelectProductsOrderProps = {
  label: string;
  options: {
    label: string;
    value: SortByType;
  }[];
  onChange?: (e: EventTarget) => void;
};

export const SelectProductsOrder = ({
  label,
  options,
}: SelectProductsOrderProps) => {
  const id = useId();
  const { shoppingCartState, shoppingCartDispatch } = useShoppingCartContext();

  return (
    <div className="relative flex gap-2 items-center mb-6 text-sm">
      <label
        htmlFor={id}
        className="absolute z-10 -top-2.5 left-2 bg-white px-1.5 text-zinc-500 text-xs"
      >
        {label}
      </label>
      <select
        name="label"
        id={id}
        className="rounded text-sm"
        onChange={(e) => {
          shoppingCartDispatch({
            type: "change_sort_by",
            sortBy: e.target.value as SortByType,
          });
        }}
        value={shoppingCartState.sortBy}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
