import React, { useState } from "react";
import Header from "./components/Header";
import ImageArea from "./components/ImageArea";
import Menu from "./components/Menu";
import Notes from "./components/Notes";
import "./assets/styles/index.scss";
import "./App.scss";

const App = () => {
  const [src, setSrc] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div className="app">
      <Header handleSrc={setSrc} />
      <main className="main">
        <Menu />
        <ImageArea imageSrc={src} tags={tags} handleTags={setTags} />
        <Notes />
      </main>
    </div>
  );
};

export default App;
