// components/ImageDetails.js
import React from "react";

const ImageDetails = ({ selectedImage }) => {
  if (!selectedImage) {
    return <div>Select an image to see details.</div>;
  }

  return (
    <div className="backgroundColor-[#fff]">
      <h1>Image Details</h1>
      <div className="image-details">
        <img src={selectedImage.url} alt={selectedImage.title} />
        <h2>{selectedImage.title}</h2>
        <p>{selectedImage.description}</p>
      </div>
    </div>
  );
};

export default ImageDetails;
