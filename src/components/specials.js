import React from "react";
import "./specials.css";
import Card from "./UI/card";

export default function Specials() {
  return (
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
  );
}
