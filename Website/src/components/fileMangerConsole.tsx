import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { LuLayoutList } from "react-icons/lu";

const FileMangerConsole = () => {
  return (
    <div className=" w-full px-3 bg-blue-50 border-b-2 border-blue-200 text-black py-3 flex gap-3 justify-between items-end">
      <abbr title="Add folder">
        <VscNewFolder className="text-2xl text-blue-300 cursor-pointer  hover:text-blue-500 transition-colors" />
      </abbr>
      <abbr title="List display">
        <LuLayoutList className="text-2xl text-blue-300 cursor-pointer  hover:text-blue-500 transition-colors" />
      </abbr>
    </div>
  );
};

export default FileMangerConsole;
