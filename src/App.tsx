import { useContext, useState } from "react";
import styles from "./App.module.scss";
import { Editor } from "./components/Editor/Editor";
import { Explorer } from "./components/Explorer/Explorer";
import { Switch } from "./components/Switch/Switch";
import { StylesContext } from "./contexts/StylesContext/StylesContext";
import classNames from "classnames";

export const App: React.FC = () => {
  const { darkThemeSelected, setDarkThemeSelected } = useContext(StylesContext);

  return (
    <main
      className={classNames(styles.main, { [styles.dark]: darkThemeSelected })}
    >
      <Explorer className={styles.explorer} />
      <div className={styles.textEditor}>
        <Switch onChange={setDarkThemeSelected} />
        <Editor />
      </div>
    </main>
  );
};
