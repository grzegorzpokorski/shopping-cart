import { DECLARED_LANGUAGES } from "../../i18next.config";

export const handleLangLoad = () => {
  const lang = localStorage.getItem("lang") || "pl";
  if (DECLARED_LANGUAGES.includes(lang)) {
    return lang;
  } else {
    localStorage.setItem("lang", "pl");
    return "pl";
  }
};
