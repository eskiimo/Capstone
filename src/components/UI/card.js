import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" alt="card" src={props.image} />
      <div className="card-header">
        <h5> {props.title}</h5>

        <h5 className="price"> {props.price}</h5>
      </div>
      <div className="card-description">{props.description}</div>
      <button>
        <p>Add To Cart</p>

        <img
          className="basket-icon"
          alt="basket"
          src="/assets/svgs/basket.svg"
        />
      </button>
    </div>
  );
}
