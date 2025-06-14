import React from "react";

import { FaFolder } from "react-icons/fa6";

const FolderIcon = ({ title }) => {
  return (
    <abbr
      title={title}
      className="p-3 rounded flex flex-col justify-start items-center gap-3 w-[120px] h-[140px] cursor-pointer hover:bg-blue-100"
    >
      <FaFolder className="text-5xl text-yellow-400" />
      <p className="text-black text-base leading-4 line-clamp-3 text-wrap text-ellipsis overflow-hidden">
        {title}
      </p>
    </abbr>
  );
};

export default FolderIcon;
