import { useTranslation } from "react-i18next";

export const useLang = (ns) => {
  const { t, i18n } = useTranslation(ns);

  const setLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const dir = i18n.dir();

  return { t, setLang, dir };
};
