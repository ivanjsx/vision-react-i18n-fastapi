// libraries
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// configs
import en from "./locales/en.json";
import ru from "./locales/ru.json";

// content

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "ru"],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  }
});

export default i18n;
