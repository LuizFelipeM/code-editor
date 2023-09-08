import React, { createContext, useState } from "react";

interface IStylesContext {
  darkThemeSelected: boolean;
  setDarkThemeSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StylesContext = createContext<IStylesContext>(
  {} as IStylesContext
);

export const StylesProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [darkThemeSelected, setDarkThemeSelected] = useState<boolean>(false);

  return (
    <StylesContext.Provider
      value={{
        darkThemeSelected,
        setDarkThemeSelected,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};
