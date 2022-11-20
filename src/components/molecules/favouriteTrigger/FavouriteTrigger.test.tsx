import { render, screen } from "@testing-library/react";
import React from "react";
import { FavouriteTrigger } from "./FavouriteTrigger";

describe("test <FavouriteTrigger />", () => {
  it('should dispaly "oznacz jako ulubiony" when is not checked', () => {
    render(<FavouriteTrigger checked={false} onClick={() => null} />);
    expect(screen.getByText("oznacz jako ulubiony")).toBeInTheDocument();
  });

  it('should dispaly "odznacz jako ulubiony" when is checked', () => {
    render(<FavouriteTrigger checked={true} onClick={() => null} />);
    expect(screen.getByText("odznacz jako ulubiony")).toBeInTheDocument();
  });
});
