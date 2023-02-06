import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type UIProviderValue = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const UIContext = createContext<UIProviderValue | null>(null);

export const UIProvider = ({ children }: { readonly children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isCartOpen,
      openCart,
      closeCart,
      toggleCart,
    }),
    [closeCart, isCartOpen, openCart, toggleCart],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const ctx = useContext(UIContext);

  if (!ctx) {
    throw new Error("useContext must be use inside Provider!");
  }

  return ctx;
};
