import React from "react";
import "./specials.css";
import Card from "./UI/card";

export default function Specials() {
  return (
    <div className="highlights">
      <div className="highlight-head">
        <h4 className="sub-headings">Specials</h4>
        <button className="menu-btn">MENU</button>
      </div>
      <div className="specials">
        <Card
          image="./assets/images/greek salad.jpg"
          title="Greek Salad"
          price="$9.99"
          description=" lorem  sjdnjns sdsdsd sdsdsd sdsdsdsd sdsdsd   "
        />{" "}
        <Card
          image="./assets/images/greek salad.jpg"
          title="Greek Salad"
          price="$9.99"
          description=" lorem  sjdnjns sdsdsd sdsdsd sdsdsdsd sdsdsd   "
        />{" "}
        <Card
          image="./assets/images/greek salad.jpg"
          title="Greek Salad"
          price="$9.99"
          description=" lorem  sjdnjns sdsdsd sdsdsd sdsdsdsd sdsdsd   "
        />
      </div>
    </div>
  );
}
