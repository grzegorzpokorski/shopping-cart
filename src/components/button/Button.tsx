import React from "react";
import cn from "classnames";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  variant?: ButtonVariants;
  onClick?: () => void;
};

type ButtonVariants = "default" | "indigo";

const variants = {
  default:
    "bg-zinc-700 text-white text-md px-3 py-2 hover:bg-zinc-800 focus:bg-zinc-800 disabled:bg-zinc-400",
  indigo:
    "bg-indigo-500 text-white text-md px-3 py-2 hover:bg-indigo-600 focus:bg-indigo-600 disabled:bg-indigo-300",
} as const;

export const Button = ({
  text,
  disabled,
  variant = "default",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        variants[variant],
        "disabled:cursor-not-allowed transition-colors",
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
