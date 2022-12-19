import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslate from "./local/en.json";
import arTranslate from "./local/ar.json";
const resources = {
  en: {
    translation: enTranslate,
  },
  ar: {
    translation: arTranslate,
  },
};
i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  resources,
});

export default i18n;
