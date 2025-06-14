import { useEffect, useContext, useRef, useState } from 'react';

import { LuFilePlus } from "react-icons/lu";
import { HomeContext } from "../context/contexts";

const AddFileHandler = () => {
    const [filename, setFilename] = useState('')
    const inputRef = useRef(null);
  const { setIsAddFile,addFile } = useContext(HomeContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddFile = ()=>{
    if (filename.length < 3) {
        alert('filename must be more then 3 letters')
        return
    } 
    addFile({filename})
    setIsAddFile(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddFile()
    }
    if (e.key === "Escape") {
      setIsAddFile(false);
    }
  };
  return (
    <div className="w-[120px] h-[140px] p-3 rounded flex flex-col justify-start items-center gap-3 cursor-pointer">
      <LuFilePlus className="text-5xl text-blue-500" />
      <input
        ref={inputRef}
        type="text"
        value={filename}
        onChange={(e)=>setFilename(e.target.value)}
        className="w-full text-black text-base leading-4 line-clamp-3 text-wrap text-ellipsis"
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  );
};

export default AddFileHandler;
