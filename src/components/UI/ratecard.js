import React from "react";
import "./ratecard.css";
export default function RateCard(props) {
  let stars = (n) => {
    let items = [];
    for (let i = 0; i < n; i++) {
      items.push(
        <img key={i} className="star" alt="star" src="assets/images/star.png" />
      );
    }
    return items;
  };

  return (
    <div className="rate">
      <div className="rate-stars">{stars(props.n_stars)}</div>
      <div className="user">
        <img
          className="avatar"
          alt="avatar"
          src="assets/images/Mario and Adrian b.jpg"
        />
        <div className="info">
          <p>{props.name}</p>

          <p>{props.username}</p>
        </div>
      </div>
      <p className="comment">{props.comment}</p>
    </div>
  );
}
