import React, { useState } from "react";
import { SketchPicker, ChromePicker } from "react-color";

const CustomColorPicker = ({ onColorChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#000");

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div
      style={{
        height: "fit-content",
        width: "fit-content",
        position: "relative",
      }}
    >
      <p style={{ color: color }} onClick={handleClick}>
        A
      </p>
      {displayColorPicker ? (
        <div style={{ position: "absolute", top: "calc(100% + 1vmin) " }}>
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default CustomColorPicker;
