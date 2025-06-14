import React from "react";

import { LuFilePlus } from "react-icons/lu";
import { useContext } from 'react';
import { HomeContext } from '../context/contexts';

const AddFileIcon = () => {

  const {setIsAddFile } = useContext(HomeContext)
  
  return (
    <abbr
      title="Add File"
      className="w-[120px] h-[140px] p-3 rounded flex flex-col justify-start items-center gap-3 cursor-pointer hover:bg-blue-100"
      onClick={()=>setIsAddFile(true)}
    >
      <LuFilePlus className="text-5xl text-blue-500" />
      <p className="text-black text-base leading-4 line-clamp-3 text-wrap text-ellipsis">
        Add File
      </p>
    </abbr>
  );
};

export default AddFileIcon;
