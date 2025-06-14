import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFile = create(
  persist(
    (set) => ({
      files: [],
      addFile: (file) =>set((state) => ({ files:[...state.files,file] })),
      removefile: (FileIndex) =>set((state) => ({ files:state.files.filter(file => file.id !== FileIndex ) })),
      clearPdfs:()=>set({pdfs:[]})
    }),
    {
      name: "Files",
    }
  )
);

export default useFile;