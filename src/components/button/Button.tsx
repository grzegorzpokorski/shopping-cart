import React from "react";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-zinc-700 text-white text-md px-3 py-2 hover:bg-zinc-800 focus:bg-zinc-800 disabled:bg-zinc-400 disabled:cursor-not-allowed transition-colors"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
