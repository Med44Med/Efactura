import React from "react";
import { LuFile } from "react-icons/lu";

const FileIcon = ({ title }) => {
  return (
    <abbr
      title={title}
      className="w-[120px] h-[140px] p-3 rounded flex flex-col justify-start items-center gap-3 cursor-pointer hover:bg-blue-100"
    >
      <LuFile className="text-5xl text-blue-500" />
      <p className="text-black text-base leading-4 line-clamp-3 text-wrap text-ellipsis overflow-hidden">
        {title}
      </p>
    </abbr>
  );
};

export default FileIcon;
