import React from "react";
import "./styles.css";
import { BsChevronCompactRight } from "react-icons/bs";

const ButtonComponent = (props) => {
  const { title, style, isHeader = false, scrollCheck = false } = props || {};
  const {
    textColor = "",
    Border = "",
    padding = "",
    backgroundColor = "",
  } = style || {};

  const renderIcon = () => {
    if (isHeader) return <BsChevronCompactRight style={{ marginTop: "2px" }} />;
    else return null;
  };

  return (
    <div style={{ marginLeft: isHeader ? "auto" : null }}>
      <button
        type="button"
        style={{
          color: scrollCheck ? "gray" : textColor,
          border: scrollCheck ? "1px solid gray" : Border,
          padding: padding,
          backgroundColor: backgroundColor || "transparent",
        }}
      >
        {title}
        {renderIcon()}
      </button>
    </div>
  );
};

export default ButtonComponent;
