import React from "react";

import "./Homepage.scss";
import bg from "../../assets/bg.png";

export default function Homepage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <din className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Real estate refers to land, buildings, and property used for living,
            business, or investment. It plays an important role in providing
            homes, creating jobs, and supporting economic growth.
          </p>
        </din>
      </div>

      <div className="imgContainer">
        <img src={bg} />
      </div>
    </div>
  );
}
