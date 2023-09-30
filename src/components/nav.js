import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <img id="logo" alt="logo" src="/assets/svgs/logo.svg" />
      <ul className="nav-links">
        <li className="navlink">
          <Link to="/">HOME</Link>
        </li>
        <li className="navlink">
          <Link href="/">ABOUT</Link>
        </li>
        <li className="navlink">
          <Link to="/menu">MENU</Link>
        </li>
        <li className="navlink">
          <Link to="/reserve">RESERVATIONS</Link>
        </li>
        <li className="navlink">
          <Link to="/order">ORDER ONLINE</Link>
        </li>
      </ul>
      <span className="hamburger"></span>
    </nav>
  );
}
