import React from "react";
import { Button } from "../../atoms/button/Button";
import { useUIContext } from "../../../providers/UIProvider";

export const EmptyCart = () => {
  const { toggleCart } = useUIContext();

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <p>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
      <Button onClick={toggleCart}>Kontynuj zakupy</Button>
    </div>
  );
};
