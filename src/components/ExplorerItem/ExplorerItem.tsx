import styles from "./ExplorerItem.module.scss";
import React, { useState } from "react";
import classNames from "classnames";
import { IExplorerItemProps } from "./IExplorerItemProps";

export const ExplorerItem: React.FC<IExplorerItemProps> = ({
  children,
  onClick,
}) => {
  const [selected, setSelected] = useState(false);

  const onItemClick: React.MouseEventHandler<HTMLLIElement> = (e) => {
    setSelected((s) => !s);
    onClick?.(e);
  };

  return (
    <li
      className={classNames(styles.item, {
        [styles.selected]: selected,
      })}
      onClick={onItemClick}
    >
      <span className={styles.label}>
        <span className={styles.icon}></span>
        <span className={styles.title}>{children}</span>
      </span>
    </li>
  );
};
