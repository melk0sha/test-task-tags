import React, { useState } from "react";
import { FileDrop } from "react-file-drop";
import "./index.scss";

const DragAndDrop = ({ handleSrc }) => {
  const [dropText, setDropText] = useState("Drop file here!");

  const handleDrop = (files) => {
    const [image] = files;
    setDropText("Drop file here!");

    if (image) {
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        handleSrc(reader.result);
      });

      reader.readAsDataURL(image);
    }
  };

  const handleDragOver = () => {
    setDropText("Dropping...");
  };

  return (
    <div className="dnd">
      <FileDrop
        className="dnd-input"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {dropText}
      </FileDrop>
    </div>
  );
};

export default DragAndDrop;
