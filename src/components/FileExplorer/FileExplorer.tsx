import styles from "./FileExplorer.module.scss";
import React from "react";

export const FileExplorer: React.FC = () => {
  return (
    <div className={styles.folders}>
      <input id="pc" type="checkbox" checked />
      <ul>
        <li>Quick Access</li>
        <li>OneDrive</li>
        <li>
          <label className="lab-accor" htmlFor="pc">
            This PC
          </label>
        </li>
        <ul className="level-2">
          <li>Disk (C:)</li>
          <li className="active">Disk (I:)</li>
          <li>Photos</li>
          <li>Download</li>
        </ul>
        <li>Removable Disks</li>
        <li>Network</li>
      </ul>
    </div>
  );
};
