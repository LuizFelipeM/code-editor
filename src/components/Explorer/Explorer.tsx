import { ExplorerFolder } from "../ExplorerFolder/ExplorerFolder";
import { ExplorerItem } from "../ExplorerItem/ExplorerItem";
import styles from "./Explorer.module.scss";
import React, { useContext } from "react";
import { IExplorerProps } from "./IExplorerProps";
import classNames from "classnames";
import { StylesContext } from "../../contexts/StylesContext/StylesContext";

export const Explorer: React.FC<IExplorerProps> = ({ className }) => {
  const { darkThemeSelected } = useContext(StylesContext);

  return (
    <nav
      className={classNames(styles.sidebar, className, {
        [styles.dark]: darkThemeSelected,
      })}
    >
      <ul>
        <ExplorerFolder title="public">
          <>
            <ExplorerItem>vite.svg</ExplorerItem>
            <ExplorerFolder title="test">
              <ExplorerItem>vite.svg</ExplorerItem>
            </ExplorerFolder>
          </>
        </ExplorerFolder>
        <ExplorerItem>src</ExplorerItem>
      </ul>
    </nav>
  );
};
