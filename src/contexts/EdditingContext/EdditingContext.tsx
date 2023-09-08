import React, { createContext, useState } from "react";
import { IEdditingFile } from "../../interfaces/IEdditingFile";

interface IEdditingContext {
  files: IEdditingFile[];
  setFiles: React.Dispatch<React.SetStateAction<IEdditingFile[]>>;
}

export const EdditingContext = createContext<IEdditingContext | null>(null);

export const EdditingProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [files, setFiles] = useState<IEdditingFile[]>([]);

  return (
    <EdditingContext.Provider
      value={{
        files,
        setFiles,
      }}
    >
      {children}
    </EdditingContext.Provider>
  );
};
