import { useEffect, useState } from "react";
import { ZodType } from "zod";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T | (() => T),
  shema: ZodType,
) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue) {
      const { success } = shema.safeParse(JSON.parse(jsonValue));
      if (success) return JSON.parse(jsonValue) as T;
    }

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
