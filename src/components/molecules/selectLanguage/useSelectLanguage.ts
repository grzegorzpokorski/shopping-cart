import i18next from "i18next";
import { useState } from "react";

export const useSelectLanguage = () => {
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang") || "pl",
  );

  const handleChangeLanguage = (newLang: string) => {
    void i18next.changeLanguage(newLang);
    setSelectedLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { selectedLang, handleChangeLanguage };
};
