import { Select } from "antd";
import React from "react";
import styles from "./index.module.scss";

function Dropdown({ options, placeholder, onChange, label, error }) {
  const { Option } = Select;
  return (
    <div className={styles.wrapper}>
      <Select
        className={styles.select}
        placeholder={placeholder}
        onChange={(value) => onChange(label, value)}
      >
        {options?.map((item) => (
          <Option value={item} key={item}>
            {item}
          </Option>
        ))}
      </Select>
      {error && <pre className="red">{error}</pre>}
    </div>
  );
}

export default Dropdown;
