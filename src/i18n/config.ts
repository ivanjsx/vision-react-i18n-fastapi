// libraries
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// resources
import resources from "./resources";

// content

i18next.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
  returnNull: false,
  resources: resources,
  defaultNS: "translation",
  supportedLngs: ["en", "ru"],
  interpolation: { escapeValue: false },
});

export default i18next;
