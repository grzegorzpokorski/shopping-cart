import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T | (() => T),
) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
