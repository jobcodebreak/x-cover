import React, { useState } from "react";
import styled from "styled-components";

const FloatingLabelInput = ({
  label,
  value,
  onChange,
  height,
  maxLength,
  showCharCount = false,
  type = "text",
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  const InputTag = type === "textarea" ? "textarea" : "input";

  return (
    <Wrapper>
      <StyledInput
        as={InputTag}
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={(e) => setFocused(!!e.target.value)}
        onChange={onChange}
        height={height}
        maxLength={maxLength}
        {...props}
      />
      <Label active={isActive}>{label}</Label>
      {showCharCount && maxLength && focused && (
        <CharCount>
          {value.length} / {maxLength}
        </CharCount>
      )}
    </Wrapper>
  );
};

export default FloatingLabelInput;

//==============================styled-components

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${(props) => props.height || "60px"};
  padding: 16px 12px 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;
  background-color: transparent;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1d9bf0;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 12px;
  font-weight: 500;
  top: ${(props) => (props.active ? "6px" : "18px")};
  font-size: ${(props) => (props.active ? "12px" : "16px")};
  color: ${(props) => (props.active ? "#1d9bf0" : "#777777")};
  background-color: white;
  padding: 0 4px;
  transition: all 0.2s ease;
  pointer-events: none;
`;

const CharCount = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  font-weight: 500;
  font-size: 13px;
  color: #657786;
`;
