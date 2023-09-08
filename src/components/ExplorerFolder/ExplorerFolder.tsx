import styles from "./ExplorerFolder.module.scss";
import React, { useState } from "react";
import { ReactComponent as Chevron } from "../../assets/chevron.svg";
import classNames from "classnames";
import { IExplorerFolderProps } from "./IExplorerFolderProps";

export const ExplorerFolder: React.FC<IExplorerFolderProps> = ({
  children,
  title,
  onClick,
}) => {
  const [open, setOpen] = useState(false);

  const onFolderClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    setOpen((s) => !s);
    onClick?.(e);
  };

  return (
    <li
      className={classNames(styles.folder, {
        [styles.open]: open,
      })}
    >
      <span className={styles.label} onClick={onFolderClick}>
        <span
          className={classNames(styles.folderIcon, {
            [styles.open]: open,
          })}
        >
          <Chevron />
        </span>
        <span>{title}</span>
      </span>
      {open && <ul className={styles.content}>{children}</ul>}
    </li>
  );
};
