import styles from "./App.module.scss";
import { Editor } from "./components/Editor/Editor";
import { Explorer } from "./components/Explorer/Explorer";

export const App: React.FC = () => {
  return (
    <main className={styles.main}>
      <Explorer />
      <Editor />
    </main>
  );
};
