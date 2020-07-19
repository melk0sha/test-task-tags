import React from "react";
import "./index.scss";

const ImageArea = ({ imageSrc, tags, handleTags }) => {
  const handleImageClick = () => {
    tags.push(1);
    handleTags(tags);
  };

  return (
    <div className="image-content">
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
    </div>
  );
};

export default ImageArea;
