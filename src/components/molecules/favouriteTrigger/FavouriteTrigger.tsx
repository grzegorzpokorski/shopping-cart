import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "../../atoms/button/Button";

type FavouriteTriggerProps = {
  checked: boolean;
  onClick: () => void;
};

export const FavouriteTrigger = ({
  checked,
  onClick,
}: FavouriteTriggerProps) => {
  return (
    <span className="absolute top-0 left-0 flex items-center justify-center bg-white">
      <Button
        variant={checked ? "favourite_trigger_active" : "favourite_trigger"}
        onClick={onClick}
      >
        {checked ? (
          <>
            <FaHeart />
            <span className="sr-only">odznacz jako ulubiony</span>
          </>
        ) : (
          <>
            <FaRegHeart />
            <span className="sr-only">oznacz jako ulubiony</span>
          </>
        )}
      </Button>
    </span>
  );
};
