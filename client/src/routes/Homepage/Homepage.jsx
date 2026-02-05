import React from "react";

import "./Homepage.scss";
import bg from "../../assets/bg.png";
import SearchBar from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Homepage() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p>
            Real estate refers to land, buildings, and property used for living,
            business, or investment. It plays an important role in providing
            homes, creating jobs, and supporting economic growth.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Year of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gain</h2>
            </div>

            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <img src={bg} />
      </div>
    </div>
  );
}
