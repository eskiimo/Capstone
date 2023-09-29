import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img alt="footer" src="/assets/images/restauranfood.jpg" />
          </Col>
          <Col>
            <ul>
              <h4>Doormat Navigation</h4>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h4>Contact</h4>
              <li>Address</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </Col>
          <Col>
            {" "}
            <ul>
              <h4>Social Media</h4>
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
