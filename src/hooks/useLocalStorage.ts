import { useEffect, useState } from "react";
import { ZodType } from "zod";

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
  shema: ZodType<T>,
) => {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue) {
      const validate = shema.safeParse(JSON.parse(jsonValue));
      if (validate.success) return validate.data;
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
