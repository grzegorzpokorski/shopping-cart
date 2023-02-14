import { render } from "@testing-library/react";
import { InternationalizationProvider } from "../../../tests/InternationalizationProvider";
import { FavouriteTrigger } from "./FavouriteTrigger";

describe("<FavouriteTrigger>", () => {
  it("button has appropriate accesible name", () => {
    const { container, rerender } = render(
      <FavouriteTrigger checked={false} onClick={vi.fn()} />,
      { wrapper: InternationalizationProvider },
    );
    expect(container.textContent).toBe("oznacz jako ulubiony");

    rerender(<FavouriteTrigger checked={true} onClick={vi.fn()} />);
    expect(container.textContent).toBe("odznacz jako ulubiony");
  });
});
