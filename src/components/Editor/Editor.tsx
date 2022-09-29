import styles from "./Editor.module.scss";
import React, { memo, useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";

interface IFileTab {
  active: boolean;
  data: string;
  language?: string;
}

interface ITab {
  active: boolean;
  model: monaco.editor.ITextModel;
  state?: monaco.editor.ICodeEditorViewState;
}

interface IEditorProps {
  theme?: string;
  tabs?: IFileTab[];
  onChange?: (value: string) => void;
  onEditorMount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  onEditorUnmount?: (editor: monaco.editor.IStandaloneCodeEditor) => void;
}

const EditorComponent: React.FC<IEditorProps> = ({
  theme,
  tabs: fileTabs,
  onChange,
  onEditorMount,
  onEditorUnmount,
}) => {
  const containerRef = useRef(null);

  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [tabs, setTabs] = useState<ITab[]>(
    fileTabs?.map(({ active, data, language }) => ({
      active,
      model: monaco.editor.createModel(data, language),
    })) ?? []
  );

  useEffect(() => {
    if (!editor) {
      const editorInstance = monaco.editor.create(containerRef.current!, {
        theme,
      });

      onEditorMount?.(editorInstance);

      editorInstance.onDidChangeModelContent(() =>
        onChange?.(editorInstance.getValue())
      );

      setEditor(editorInstance);
    }

    return () => {
      if (editor) {
        onEditorUnmount?.(editor);
        editor.dispose();
      }
    };
  }, []);

  return <div className={styles.Editor} ref={containerRef}></div>;
};

export const Editor = memo(EditorComponent);
