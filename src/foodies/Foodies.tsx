import React from "react";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Questions from "./components/questions/Questions";
import SpecialSection from "./components/specialSection/SpecialSection";
import Testimonials from "./components/testimonials/Testimonials";
import "./style.css";

export default function Foodies() {
  return (
    <div className="bg-foodiesBgColor relative overflow-x-hidden">
      <Nav />
      <Header />
      <SpecialSection />
      <About />
      <Features />
      <Testimonials />
      <Questions />
      <Footer />
    </div>
  );
}
