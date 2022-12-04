import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./../planta/components/header/Header";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Testmonials from "./components/testmonials/Testmonials";
import "./i18n";

export default function Planta() {
  let { i18n } = useTranslation();
  return (
    <div
      className={`bg-plantaSBgColor bg-opacity-40 ${
        i18n.language == "ar" && "font-elMessiri"
      }`}
      dir={`${i18n.language == "en" ? "lrt" : "rtl"}`}
    >
      <Header />
      <About />
      <Testmonials />
      <Gallery />
      <Footer />
    </div>
  );
}
