import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData } from "../../lib/dummy";
import { userData } from "../../lib/dummy";
import pin from "../../assets/pin.png";
import Maps from "../../components/map/Maps";
import utility from "../../assets/utility.png";
import fees from "../../assets/fee.png";
import pet from "../../assets/pet.png";
import size from "../../assets/size.png";
import bed from "../../assets/bed.png";
import restaurant from "../../assets/size.png";
import school from "../../assets/school.png";

import bath from "../../assets/bath.png";

import bus from "../../assets/bus.png";
import chat from "../../assets/chat.png";
import save from "../../assets/save.png";

// import search , SVGAElement, logo, bus, bath
// import Maps from '../../components/map/Maps'

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
        <div className="wrapper">
          <p className="title">
            <p>General</p>
            <div className="listVertical">
              <div className="feature">
                <img src={utility} />
                <div>
                  <span>Uitilities</span>
                  <p>Renter is responsible</p>
                </div>
              </div>

              <div className="feature">
                <img src={pet} />
                <div>
                  <span>Pet Policy</span>
                  <p>Pets Allowed</p>
                </div>
              </div>

              <div className="feature">
                <img src={fees} />
                <div>
                  <span>Property Fees</span>
                  <p>Must have 3x the rent in total household income</p>
                </div>
              </div>
            </div>
          </p>
          <p className="title">
            <p>Sizes</p>

            <div className="sizes">
              <div className="size">
                <img src={size} />
                <span>80sqft</span>
              </div>

              <div className="size">
                <img src={bed} />
                <span>2 bed</span>
              </div>

              <div className="size">
                <img src={bath} />
                <span>1 bathroom</span>
              </div>
            </div>
          </p>

          <p className="title">
            <p>Nearby Places</p>
            <div className="listHorizontal">
              <div className="feature">
                <img src={school} />

                <div>
                  <span>School</span>
                  <p>250m away</p>
                </div>
              </div>

              <div className="feature">
                <img src={bus} />

                <div>
                  <span>Bus stop</span>
                  <p>100m away</p>
                </div>
              </div>

              <div className="feature">
                <img src={restaurant} />

                <div>
                  <span>Resturent</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
          </p>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Maps items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chat} />
              Send a Message
            </button>
            <button>
              <img src={save} />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
