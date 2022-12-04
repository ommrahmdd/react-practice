import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Protfolio01() {
  return (
    <div className="overflow-x-hidden bg-bgColor text-white">
      <Nav />
      <Header />
      {/* Line */}
      <div className="w-full h-[.1rem] block bg-white my-28"></div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
