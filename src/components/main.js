import React from "react";
import "./main.css";

export default function Main() {
  return (
    <main>
      <div className="center hero-1">
        <h1 className="headings">LITTLE LEMON </h1>
        <h3 className="sub-headings">Sub Title</h3>
        <p className="description">
          soem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          deleniti iste, quae reiciendis itaque, quibusdam fuga officiis
          similique quis quos blanditiis sunt adipisci. Totam tenetur ipsa,
          ullam quo perferendis beatae?{" "}
        </p>
        <button className="reserve-btn"> Reserve a table </button>
      </div>
      <div className="hero-img"></div>
    </main>
  );
}
