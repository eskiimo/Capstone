import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="img-container">
        {" "}
        <img
          className="footer-img"
          alt="footer"
          src="/assets/images/restauranfood.jpg"
        />
      </div>
      <ul>
        <h4>Doormat Navigation</h4>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
      <ul>
        <h4>Contact</h4>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>{" "}
      <ul>
        <h4>Social Media</h4>
        <li>FaceBook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </footer>
  );
}
