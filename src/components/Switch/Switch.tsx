import styles from "./Switch.module.scss";
import React from "react";

interface ISwitchProps {
  onChange?: (checked: boolean) => void;
}

export const Switch: React.FC<ISwitchProps> = ({ onChange }) => (
  <span className={styles.switch}>
    <input
      type="checkbox"
      id="switch"
      onClick={(e) => onChange?.(e.currentTarget.checked)}
    />
    <label htmlFor="switch">Toggle</label>
  </span>
);
