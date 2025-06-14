import { useState } from "react";
import useFile from '../Zustand/fileManager';
import { HomeContext } from './contexts';

const HomeContextProvider = ({ children }) => {
  const { files,addFile } = useFile();

  const [displayGrid, setDisplayGrid] = useState(true);
  const [isAddFile, setIsAddFile] = useState(false);

  return (
    <HomeContext
      value={{ files,addFile, displayGrid, setDisplayGrid, isAddFile, setIsAddFile }}
    >
      {children}
    </HomeContext>
  );
};

export default HomeContextProvider;
