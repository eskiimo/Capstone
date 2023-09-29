import React from "react";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img alt="logo" src="/assets/svgs/logo.svg" />
        </li>
        <li>
          <a href="/home">Homepage</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
