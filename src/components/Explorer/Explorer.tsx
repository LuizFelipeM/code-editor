import { ExplorerFolder } from "../ExplorerFolder/ExplorerFolder";
import { ExplorerItem } from "../ExplorerItem/ExplorerItem";
import styles from "./Explorer.module.scss";
import React from "react";

export const Explorer: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
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
