import React, { useState } from "react";
import "./Slider.scss";
import arrow from "../../assets/arrow.png";

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    // console.log(direction)
    let data = imageIndex;
    // console.log(data)

    if (direction === "left") {
      data--;
      if (data < 0) {
        data = images.length - 1;
      }
    } else if (direction === "right") {
      data = (data + 1) % images.length;
      // console.log(data);
    }

    setImageIndex(data);
  };

  // console.log(imageIndex);

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrow} onClick={() => changeSlide("left")} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} />
          </div>
          <div className="arrow">
            <img
              className="right"
              onClick={() => changeSlide("right")}
              src={arrow}
            />
          </div>
          <div onClick={() => setImageIndex(null)} className="close">
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} onClick={() => setImageIndex(0)} />
      </div>

      <div className="smallImages">
        {images.slice(1).map((item, index) => (
          <img
            key={index}
            onClick={() => setImageIndex(index + 1)}
            src={item}
          />
        ))}
      </div>
    </div>
  );
}
