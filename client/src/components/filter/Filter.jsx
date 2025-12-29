import React from "react";
import "./Filter.scss";
import search from "../../assets/search.png";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search Result for <b>London</b>{" "}
      </h1>

      <div className="top">
        <div className="item">
          <label>Location</label>
          <input type="text" id="city" placeholder="City Location" />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>

          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>

          <select name="property" id="property">
            <option value="any">any</option>

            <option value="appartment">Appartment</option>
            <option value="house">House</option>
            <option value="condo">condo</option>
            <option value="land">land</option>

          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" placeholder="any" name="minPrice" />
        </div>

        <div className="item">
           <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" placeholder="any" name="maxPrice" />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" id="bedroom" placeholder="any" name="bedroom" />
        </div>

        <button>
          <img src={search} />
        </button>
      </div>
    </div>
  );
}
