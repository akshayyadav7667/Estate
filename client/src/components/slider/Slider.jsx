import React, { useState } from "react";
import "./Slider.scss";
import arrow from "../../assets/arrow.png";

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrow} />
          </div>
          <div className="imgContainer">
            <img src={images[0]} />
          </div>
          <div className="arrow">
            <img className="right" src={arrow} />
          </div>
          <div className="close">X</div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} />
      </div>

      <div className="smallImages">
        {images.slice(1).map((item, index) => (
          <img key={index} src={item} />
        ))}
      </div>
    </div>
  );
}
