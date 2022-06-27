import { Input } from "antd";
import React from "react";
import styles from "./index.module.scss";

function TextInput({ placeholder, type, onChange, label, error }) {
  return (
    <div className={styles.wrapper}>
      <Input
        placeholder={placeholder}
        type={type}
        className={styles.input}
        onChange={(e) => onChange(label, e?.target?.value)}
      />
      {error && <pre className="red">{error}</pre>}
    </div>
  );
}

export default TextInput;
