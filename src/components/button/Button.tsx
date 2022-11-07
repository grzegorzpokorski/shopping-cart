import React from "react";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export const Button = ({ text, disabled }: ButtonProps) => {
  return (
    <button
      className="bg-zinc-700 text-white text-md px-3 py-2 rounded-md disabled:bg-zinc-400 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
};
