import { createContext, useContext } from "react";

export const LangContext = createContext({
  lang: "en",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLang: (_lang: "en" | "ar") => {},
});

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error(
      "The Language Context should be used inside The Language Provider",
    );
  }
  return context;
};
