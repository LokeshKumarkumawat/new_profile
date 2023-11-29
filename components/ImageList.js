// components/ImageList.js
import React, { useState } from "react";
import p1 from "../assets/images/tiktik-logo.png";
import Image from "next/image";

const images = [
  {
    id: 1,
    title: "Image 1",
    description: "Description for Image 1",
    url: "../assets/images/p1.png",
  },
  {
    id: 2,
    title: "Image 2",
    description: "Description for Image 2",
    url: "image2.jpg",
  },
  // Add more images here
];

const ImageList = ({ onImageClick }) => {
  return (
    <div>
      <h1>Image List</h1>
      <div className="image-list">
        {images.map((image) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => onImageClick(image)}
          >
            <Image
              className="cursor-pointer"
              src={p1}
              alt="logo"
              height={50}
              width={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
