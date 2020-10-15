import React from "react";
import "./TextInput.scss";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  helpText
}) => (
  <div className="TextInput__formGroup">
    {label && <label className="TextInput__label">{label}</label>}
    <input
      type={type}
      className="TextInput__input"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      placeholder={placeholder}
    />
    {helpText && <div className="TextInput__helpText">{helpText}</div>}
  </div>
);

export default TextInput;
