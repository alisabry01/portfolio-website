import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      test: "Test",
    },
  },
  ar: {
    translation: {
      test: "اختبار",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const initialDir = i18n.dir(i18n.resolvedLanguage);
document.documentElement.dir = initialDir;
document.documentElement.lang = i18n.resolvedLanguage || "en";

export default i18n;
