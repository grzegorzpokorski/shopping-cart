import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <span className="absolute top-0 left-0 flex items-center justify-center bg-white">
      <Button
        variant={checked ? "favourite_trigger_active" : "favourite_trigger"}
        onClick={onClick}
        aria-pressed={checked}
      >
        {checked ? (
          <div className="relative">
            <FaHeart className="absolute" />
            <FaHeart className="absolute animate-ping-once" />
            <span className="sr-only">{t("button.remove_from_favourite")}</span>
          </div>
        ) : (
          <>
            <FaRegHeart />
            <span className="sr-only">{t("button.add_to_favourite")}</span>
          </>
        )}
      </Button>
    </span>
  );
};
