import React from "react";
import "./Card.scss";
import pin from "../../assets/pin.png";
import bed from "../../assets/bed.png";
import bath from "../../assets/bath.png";
import { Link } from "react-router-dom";
import chart from "../../assets/chat.png";
import save from '../../assets/save.png'

export default function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className="address">
          <img className="img" src={pin} />
          <span>{item.address}</span>
        </p>
        <p className="price">{item.price} rs </p>
        <div className="button">
          <div className="features">
            <div className="feature">
              <img src={bed} />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <img src={bath} />
              <span>{item.bedroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src={save} />
            </div>
            <div className="icon">
              <img src={chart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
