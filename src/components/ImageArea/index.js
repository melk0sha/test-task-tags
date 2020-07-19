import React from "react";
import ReactDOM from "react-dom";
import Tag from "../Tag";
import "./index.scss";

const getCursorCoordinates = (e) => {
  const halfOfTagSize = 10;
  const x = e.nativeEvent.offsetX - halfOfTagSize;
  const y = e.nativeEvent.offsetY - halfOfTagSize;
  return [x, y];
};

const ImageArea = ({ imageSrc, tags, handleTags }) => {
  const handleImageClick = (e) => {
    const [x, y] = getCursorCoordinates(e);
    const text = "1";
    tags.push({ x, y, text });

    const tagsToRender = tags.map((tag, idx) => (
      <Tag key={idx} leftPosition={tag.x} topPosition={tag.y} />
    ));

    ReactDOM.render(tagsToRender, document.querySelector(".tags-container"));
    handleTags(tags);
  };

  return (
    <div className="image-content">
      <div className="image-container">
        {imageSrc ? (
          <img
            className="image-src"
            src={imageSrc}
            alt="Uploaded Area For Tags"
            onClick={handleImageClick}
          />
        ) : (
          <div className="image-empty">No image</div>
        )}
        <div className="tags-container"></div>
      </div>
    </div>
  );
};

export default ImageArea;
