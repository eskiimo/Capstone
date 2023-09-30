import React from "react";
import "./testimonials.css";
import RateCard from "./UI/ratecard";
export default function Testimonials() {
  let rate = [
    {
      username: "kareem",
      name: "kareem kamal",
      rate: 5,
      comment: "some feedback",
    },
    {
      username: "salma",
      name: "salma abuseif",
      rate: 5,
      comment: "some more feedback about the website",
    },
    {
      username: "salma",
      name: "salma abuseif",
      rate: 5,
      comment: "some feedback",
    },
    {
      username: "salma",
      name: "salma abuseif",
      rate: 5,
      comment: "some feedback",
    },
    {
      username: "salma",
      name: "salma abuseif",
      rate: 5,
      comment: "some feedback",
    },
  ];

  let rating_cards = rate.map((rating, index) => {
    return (
      <RateCard
        key={index}
        n_stars={rating.rate}
        name={rating.name}
        username={rating.username}
        comment={rating.comment}
      />
    );
  });

  return (
    <div className="testimonials">
      <div>
        <h1 className="sub-headings"> What our customers say!</h1>
      </div>
      <div className="rate-card-container">{rating_cards}</div>
    </div>
  );
}
