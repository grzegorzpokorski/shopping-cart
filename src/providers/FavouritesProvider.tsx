import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FavouritesProviderValue = {
  favourite: number[];
  addToFavourite: (id: number) => void;
  removeFromFavourite: (id: number) => void;
};

const FavouriteContext = createContext<FavouritesProviderValue | null>(null);

export const FavouriteProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [favourite, setFavourite] = useLocalStorage<number[]>("favourite", []);

  const addToFavourite = useCallback(
    (id: number) => {
      setFavourite((prev) => {
        return [...prev, id];
      });
    },
    [setFavourite],
  );

  const removeFromFavourite = useCallback(
    (id: number) => {
      setFavourite((prev) => {
        return [...prev.filter((item) => item !== id)];
      });
    },
    [setFavourite],
  );

  const value = useMemo(
    () => ({
      favourite,
      addToFavourite,
      removeFromFavourite,
    }),
    [addToFavourite, favourite, removeFromFavourite],
  );
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => {
  const ctx = useContext(FavouriteContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
