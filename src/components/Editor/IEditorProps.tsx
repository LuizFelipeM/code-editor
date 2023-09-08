import * as monaco from "monaco-editor";
import { IFileTab } from "./Editor";

export interface IEditorProps {
  theme?: string;
  tabs?: IFileTab[];
  onChange?: (value: string) => void;
  onEditorMount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  onEditorUnmount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
}
