import React from "react";
import { IExplorerItemProps } from "../ExplorerItem/IExplorerItemProps";

export interface IExplorerFolderProps {
  title: string;
  children?:
    | React.ReactElement<IExplorerItemProps>
    | React.ReactElement<IExplorerFolderProps>;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}
