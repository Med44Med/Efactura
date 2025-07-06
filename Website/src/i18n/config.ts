import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import example_en from "./locales/en/example.json";
import example_fr from "./locales/fr/example.json";
import homepage_en from "./locales/en/homepage.json";
import homepage_fr from "./locales/fr/homepage.json";
import homepage_ar from "./locales/ar/homepage.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  lng: "en",
  // debug: true,
  resources: {
    en: {
      example: example_en,
      homepage: homepage_en,
    },
    fr: {
      example: example_fr,
      homepage: homepage_fr,
    },
    ar: {
      homepage: homepage_ar,
    },
  },
});

export default i18n;
