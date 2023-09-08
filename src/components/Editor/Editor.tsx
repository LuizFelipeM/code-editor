import styles from "./Editor.module.scss";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { IEditorProps } from "./IEditorProps";
import { StylesContext } from "../../contexts/StylesContext/StylesContext";

export interface IFileTab {
  active: boolean;
  data: string;
  language?: string;
}

interface ITab {
  active: boolean;
  model: monaco.editor.ITextModel;
  state?: monaco.editor.ICodeEditorViewState;
}

const EditorComponent: React.FC<IEditorProps> = ({
  defaultTheme,
  tabs: fileTabs,
  onChange,
  onEditorMount,
  onEditorUnmount,
}) => {
  const { darkThemeSelected } = useContext(StylesContext);
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
        theme: defaultTheme,
        automaticLayout: true,
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

  useEffect(
    () =>
      monaco.editor.setTheme(
        darkThemeSelected ? "vs-dark" : defaultTheme ?? "vs"
      ),
    [darkThemeSelected]
  );

  return <div className={styles.editor} ref={containerRef}></div>;
};

export const Editor = memo(EditorComponent);
