import { Editor } from "./components/Editor/Editor";
import { FileExplorer } from "./components/FileExplorer/FileExplorer";

export const App: React.FC = () => {
  return (
    <div>
      <FileExplorer />
      <Editor />;
    </div>
  );
};
