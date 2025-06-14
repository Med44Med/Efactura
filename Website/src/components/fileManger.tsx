import {useContext} from "react";
import FileMangerConsole from "./fileMangerConsole";
import FileIcon from "./fileIcon";
import FolderIcon from "./folderIcon";
import AddFileIcon from './addFileIcon';
import { HomeContext } from '../context/contexts';
import AddFileHandler from './addFileHandler';

const FileManger = () => {

  const {files, isAddFile } = useContext(HomeContext)
  
  console.log(files);
  
  return (
    <div className="relative flex flex-col justify-start items-start bg-white shadow w-full h-[500px] mt-5 rounded-xl overflow-hidden">
      <FileMangerConsole />
      <div className="w-full flex justify-start items-start gap-5 flex-wrap flex-1 p-3 overflow-y-auto">
        <AddFileIcon />
        <FolderIcon title="hello" />
        <FileIcon title="hello" />
        {}
        {isAddFile && <AddFileHandler title="here your component" />}
      </div>
    </div>
  );
};

export default FileManger;
