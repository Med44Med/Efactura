import { useState, useContext } from "react";

import { FaGlobeEurope } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { RxMargin } from "react-icons/rx";
import { ConfigContext } from "../../context/contexts";
import { useLang } from "../../i18n/hook";

const templates = [
  "default",
  "classic",
  "moderne",
  "template 1",
  "template 2",
  "template 3",
];

const Console = ({ invoice, setInvoice, selectedTemplate }) => {
  const { theme, toggleTheme } = useContext(ConfigContext);
  const { t, lang, setLang } = useLang("nonUserConsole");

  const [showLanguages, setShowLanguages] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  const handleTemplates = (template) => {
    setInvoice((perv) => ({ ...perv, template }));
    setShowTemplates(false);
  };

  return (
    <>
      <div className="z-50 bg-surface w-full py-3 px-5 flex justify-start items-center gap-3">
        <button
          onClick={() => toggleTheme()}
          className="bg-primary hover:bg-primary-hover h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2"
        >
          {theme === "dark" ? (
            <FaSun className="text-primary-contrast text-lg font-medium" />
          ) : (
            <FaMoon className="text-primary-contrast text-lg font-medium" />
          )}
        </button>
        <button
          onClick={() => {
            setShowLanguages((perv) => !perv);
            setShowTemplates(false);
            setShowLayout(false);
          }}
          className="bg-primary hover:bg-primary-hover h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2"
        >
          <FaGlobeEurope className="text-primary-contrast text-lg font-medium" />
          <p className="text-primary-contrast text-lg font-medium uppercase">
            {lang}
          </p>
        </button>
        <button
          onClick={() => {
            setShowTemplates((perv) => !perv);
            setShowLayout(false);
            setShowLanguages(false);
          }}
          className="bg-primary hover:bg-primary-hover h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2"
        >
          <LuFiles className="text-primary-contrast text-lg font-medium" />
          <p className="text-primary-contrast text-lg font-medium">
            {t("templates")}
          </p>
        </button>
        <button
          onClick={() => {
            setShowLayout((perv) => !perv);
            setShowTemplates(false);
            setShowLanguages(false);
          }}
          className="bg-primary hover:bg-primary-hover h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2"
        >
          <RxMargin className="text-primary-contrast text-lg font-medium" />
          <p className="text-primary-contrast text-lg font-medium">Layout</p>
        </button>
        <button className="bg-primary hover:bg-primary-hover ml-auto h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2">
          <FaSave className="text-primary-contrast text-lg font-medium" />
          <p className="text-primary-contrast text-lg font-medium">Save</p>
        </button>
        <button className="bg-primary hover:bg-primary-hover h-10 px-5 rounded cursor-pointer flex justify-center items-center gap-2">
          <FaFilePdf className="text-primary-contrast text-lg font-medium" />
          <p className="text-primary-contrast text-lg font-medium">PDF File</p>
        </button>
      </div>
      <div
        className={`absolute bg-surface z-40 shadow top-[64px] left-0 h-24 w-1/2 flex justify-center items-center gap-5 ${showLanguages ? "-translate-y-0" : "-translate-y-full"}`}>
        <button onClick={()=>setLang('ar')} className='bg-primary text-primary-contrast p-3 rounded'>العربية</button>
        <button onClick={()=>setLang('ar')} className='bg-primary text-primary-contrast p-3 rounded'>English</button>
        <button onClick={()=>setLang('ar')} className='bg-primary text-primary-contrast p-3 rounded'>français</button>
      </div>
      <div
        className={`absolute bg-surface z-40 shadow top-[64px] left-0 h-96 w-full ${
          showTemplates ? "-translate-y-0" : "-translate-y-full"
        } cursor-pointer overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-surface [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full`}
      >
        <div className="absolute top-0 left-0 h-full w-fit px-10 flex justify-start items-center gap-10">
          {templates.map((temp, index) => (
            <div
              key={index}
              onClick={() => handleTemplates(temp)}
              className={`bg-primary-contrast h-72 w-48 border-2 ${
                selectedTemplate === temp
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              {temp}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute bg-surface z-40 shadow top-[64px] left-0 h-96 w-full p-5 flex flex-col justify-start items-start gap-5 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-surface [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full ${
          showLayout ? "-translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-center items-center gap-3">
          <label className="text-text capitalize text-base">invoice name</label>
          <input
            type="text"
            className="bg-background p-1 px-3 text-text"
            value={invoice.name}
            onChange={(e) =>
              setInvoice((perv) => ({ ...perv, name: e.target.value }))
            }
          />
        </div>
        <div className="flex justify-center items-center gap-3">
          <label className="text-text capitalize text-base">margin</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={invoice.settings.margin}
            onChange={(e) =>
              setInvoice((perv) => ({
                ...perv,
                settings: { ...invoice.settings, margin: e.target.value },
              }))
            }
          />
          <p className="text-text capitalize text-base">
            {invoice.settings.margin} Cm
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <label className="text-text capitalize text-base">
            primary color
          </label>
          <input
            type="color"
            value={invoice.settings.primaryColor}
            onChange={(e) =>
              setInvoice((perv) => ({
                ...perv,
                settings: { ...invoice.settings, primaryColor: e.target.value },
              }))
            }
          />
          <p className="text-text capitalize text-base">
            {invoice.settings.primaryColor}
          </p>
        </div>
      </div>
    </>
  );
};

export default Console;
