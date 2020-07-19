import React from "react";
import "./index.scss";

const Tag = ({ leftPosition, topPosition }) => {
  return (
    <div
      style={{ left: leftPosition + "px", top: topPosition + "px" }}
      className="tag"
    ></div>
  );
};

export default Tag;
