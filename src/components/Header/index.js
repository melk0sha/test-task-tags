import React from "react";
import DragAndDrop from "../DragAndDrop";
import "./index.scss";

const Header = ({ handleSrc }) => {
  return (
    <header className="header">
      <DragAndDrop handleSrc={handleSrc} />
    </header>
  );
};

export default Header;
