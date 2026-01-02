import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData } from "../../lib/dummy";
import { userData } from "../../lib/dummy";
import pin from "../../assets/pin.png";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pin} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>

              <div className="user">
                <img src={userData.img} />
                <span>{userData.name}</span>
              </div>
              <div></div>
            </div>
            <div className="bottom">
              hello world hello world hello world hello world hello world hello
              world hello world hello world hello world hello world hello world
              hello world
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">right</div>
      </div>
    </div>
  );
}
