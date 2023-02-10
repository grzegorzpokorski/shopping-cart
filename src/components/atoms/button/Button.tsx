import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

type ButtonProps = {
  variant?: ButtonVariants;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariants =
  | "default"
  | "indigo"
  | "indigo_link"
  | "quantity_button"
  | "cart_trigger"
  | "favourite_trigger"
  | "favourite_trigger_active"
  | "red";

const variants = {
  default:
    "bg-zinc-700 text-white text-md px-3 py-2 hover:bg-zinc-800 focus:bg-zinc-800 disabled:bg-zinc-400",
  indigo:
    "bg-indigo-500 text-white text-md px-3 py-2 hover:bg-indigo-600 focus:bg-indigo-600 disabled:bg-indigo-300",
  indigo_link: "text-indigo-600 hover:text-indigo-500",
  quantity_button:
    "flex items-center border-2 border-zinc-400 hover:border-zinc-600 rounded text-zinc-400 hover:text-zinc-600 p-1 text-sm disabled:cursor-not-allowed disabled:text-zinc-300 disabled:border-zinc-300 disabled:hover:text-zinc-300 disabled:hover:border-zinc-300",
  cart_trigger:
    "relative h-8 w-8 flex items-center justify-center text-2xl hover:opacity-80",
  favourite_trigger:
    "p-3 text-xl rounded-full bg-white text-zinc-700 hover:opacity-80 focus:opacity-80",
  favourite_trigger_active:
    "p-3 text-xl rounded-full bg-white text-red-500 hover:opacity-80 focus:opacity-80",
  red: "bg-red-500 text-white text-md px-3 py-2 hover:bg-red-600 focus:bg-red-600",
} as const;

export const Button = ({
  children,
  disabled,
  variant = "default",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        variants[variant],
        "text-center disabled:cursor-not-allowed transition-colors rounded flex flex-row items-center justify-center gap-1.5",
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
