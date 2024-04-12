import React from "react";

const Triangle = ({ fillColor, strokeColor }) => {
  return (
    <div
      style={{
        height: "300px",
        width: "700px",
        background: "red",
        border: "20px solid gray",
        borderRadius: "150px",
      }}
    ></div>
  );
};

export default Triangle;
