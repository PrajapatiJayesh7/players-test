import React from "react";
import imageList from "../players-images/index";

function ImageCard() {
  //   console.log(image);
  return (
    <div className="card-container">
      {imageList.map((img) => (
        <img src={img.url} key={img.id} />
      ))}
    </div>
  );
}

export default ImageCard;
