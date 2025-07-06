import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ConfigContext } from "./context/contexts";
import { useLang } from "./i18n/hook";

const Example = () => {
  const { theme, toggleTheme } = useContext(ConfigContext);

  const { t, setLang ,dir} = useLang("homepage");
 
  return (
    <main className="bg-background w-full min-h-screen p-5 flex flex-col justify-start items-start gap-5" style={{direction:dir}}>
      <div className="bg-surface w-2/3 h-20 rounded-lg p-5 shadow flex justify-center items-center gap-3">
        <button
          onClick={() => toggleTheme()}
          className="text-text capitalize cursor-pointer"
        >
          {theme}{" "}
        </button>
        <button
          onClick={() => setLang("en")}
          className="text-text capitalize cursor-pointer"
        >
          EN
        </button>
        <button
          onClick={() => setLang("fr")}
          className="text-text capitalize cursor-pointer"
        >
          FR
        </button>
        <button
          onClick={() => setLang("ar")}
          className="text-text capitalize cursor-pointer"
        >
          AR
        </button>
      </div>
      <div className="bg-surface w-2/3 h-72 rounded-lg p-5 shadow flex flex-col justify-start items-center">
        <p className="text-text text-5xl capitalize">{t("title")}</p>
        <p className="text-text-secondary text-base">Secondary text</p>
      </div>
      <div className="bg-primary w-2/3 h-72 rounded-lg p-5 shadow flex flex-col justify-start items-center hover:bg-primary-hover">
        <p className="text-primary-contrast text-5xl">Title</p>
        <p className="text-primary-contrast text-base">Text</p>
        <p className="text-primary-secondary text-base">Secondary text</p>
      </div>
    </main>
  );
};

export default Example;
