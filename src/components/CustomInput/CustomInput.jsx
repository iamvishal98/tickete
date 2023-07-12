import React from "react";
import { Input, Select } from "antd";
import "./Input.scss";

const CustomInput = ({ label, placeholder, suffixIcon, prefixIcon, type }) => {
  return (
    <div className="custom-input">
      <label>
        <img src={label} alt="input-border-text" />
      </label>
      {type != "selector" ? (
        <Input
          placeholder={placeholder}
          prefix={prefixIcon ? <img src={prefixIcon} /> : ""}
          suffix={suffixIcon ? <img src={suffixIcon} /> : ""}
        />
      ) : (
        <Select
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
          ]}
        />
      )}
    </div>
  );
};

export default CustomInput;
