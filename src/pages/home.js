import React from "react";
import Main from "../components/main";
import Specials from "../components/specials";
import Testimonials from "../components/testimonials";
import About from "../components/about";

export default function HomePage() {
  return (
    <>
      <Main />
      <Specials />
      <Testimonials />
      <About />
    </>
  );
}
