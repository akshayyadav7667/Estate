import React from "react";
import "./ListPage.scss";
import listData from "../../lib/dummy";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Maps from "../../components/map/Maps";
// import Card from "../../components/card/Card";

export default function ListPage() {
  const data = listData;
  console.log(data);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Maps items={data}/>
      </div>
    </div>
  );
}
