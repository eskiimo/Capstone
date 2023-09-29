import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <img id="logo" alt="logo" src="/assets/svgs/logo.svg" />
      <ul className="nav-links">
        <li className="navlink">
          <a href="/home">Homepage</a>
        </li>
        <li className="navlink">
          <a href="/about">About Us</a>
        </li>
        <li className="navlink">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
