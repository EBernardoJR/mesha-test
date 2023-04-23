import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { Wrapper } from "./styles";

interface IProps {
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  mask?: (string | RegExp)[];
  type?: string;
  hideValue?: boolean;
}

const TextInput: React.FC<IProps> = ({
  placeholder = "",
  onChange,
  initialValue,
  mask = [],
  type = "text",
  hideValue = false,
}: IProps) => {
  const [inputValue, setInputValue] = useState(initialValue || "");
  const [showingValue, setShowingValue] = useState(!hideValue);
  const [inputType, setInputType] = useState(hideValue ? "password" : type);

  const changeValue = (value: string) => {
    setInputValue(value);
    if (onChange) {
      if (mask.length !== 0) {
        onChange(value.replace(/[^a-zA-Z0-9 ]/g, ""));
      } else {
        onChange(value);
      }
    }
  };

  const hideButtons = () => {
    return showingValue ? (
      <button
        tabIndex={-1}
        onClick={() => {
          setShowingValue((showingValue) => !showingValue);
          setInputType("password");
        }}
      >
        <FiEyeOff color="#0074CA" />
      </button>
    ) : (
      <button
        tabIndex={-1}
        onClick={() => {
          setShowingValue((showingValue) => !showingValue);
          setInputType("text");
        }}
      >
        <FiEye color="#0074CA" />
      </button>
    );
  };

  if (mask.length !== 0) {
    return (
      <Wrapper>
        <MaskedInput
          mask={mask}
          value={inputValue}
          placeholder={placeholder}
          guide={false}
          onChange={(e: any) => changeValue(e.target.value)}
          className="form_field"
        />
        <label htmlFor="text" className="form_label">
          {placeholder}
        </label>
      </Wrapper>
    );
  }

  return (
    <Wrapper typePassword={hideValue}>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={(e: any) => changeValue(e.target.value)}
        className="form_field"
      />
      <label htmlFor="text" className="form_label">
        {placeholder}
      </label>

      {hideValue && hideButtons()}
    </Wrapper>
  );
};

export default TextInput;
