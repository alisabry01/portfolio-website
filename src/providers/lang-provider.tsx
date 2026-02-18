import { useTranslation } from "react-i18next";
import { useEffect, type ReactNode } from "react";
import { LangContext } from "@/contexts";

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  const setLang = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
  };

  const value = {
    lang: i18n.language,
    setLang,
  };

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
};
