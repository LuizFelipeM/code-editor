import React, { createContext, useState } from "react";
import { IEdditingFile } from "../../interfaces/IEdditingFile";

interface IEdditingContext {
  files: IEdditingFile[];
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
      }}
    >
      {children}
    </EdditingContext.Provider>
  );
};
