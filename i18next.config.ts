import i18n from "i18next";
import en from "./src/locales/en/translation.json";
import pl from "./src/locales/pl/translation.json";
import { initReactI18next } from "react-i18next";
import { handleLangLoad } from "./src/utils/handleLangLoad";

export const resources = {
  pl: {
    translation: pl,
  },
  en: {
    translation: en,
  },
} as const;

export const DECLARED_LANGUAGES = ["pl", "en"];
export type Languages = (typeof DECLARED_LANGUAGES)[number];

void i18n.use(initReactI18next).init({
  lng: handleLangLoad(),
  interpolation: {
    escapeValue: false,
  },
  resources,
  react: {
    useSuspense: false,
  },
  fallbackLng: "pl",
});

export { i18n };
