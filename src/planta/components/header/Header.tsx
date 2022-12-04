import React from "react";
import { Link } from "react-router-dom";
import { SBtn } from "./../Buttons";
import useHeader from "./Header_ts";
import Container from "./../Container";
import logo from "./../../../assets/imgs/planta/header/logo.png";
import appleImg from "./../../../assets/imgs/planta/header/apple.png";
import playStoreImg from "./../../../assets/imgs/planta/header/play.png";
import img01 from "./../../../assets/imgs/planta/header/01.png";
export default function Header() {
  let { handleChangeLang, t, i18n } = useHeader();

  return (
    <section className="min-h-screen">
      {/* Nav */}
      <nav className="py-3 px-6 flex items-center justify-between">
        <button className="text-2xl text-plantaMainColor capitalize">
          {t("nav.support")}
        </button>
        <Link to="/planta">
          <img src={logo} alt="logo" className="w-28 h-28 object-contain" />
        </Link>
        <div className="flex items-center gap-5">
          <select
            id="selection"
            name="langSelection"
            className="text-2xl text-plantaMainColor outline-none bg-transparent"
            onChange={(e) => handleChangeLang(e)}
          >
            <option value="en">English</option>
            <option value="ar" className="font-elMessiri ">
              العربيــة
            </option>
          </select>
          <SBtn content={`${t("nav.getApp")}`} />
        </div>
      </nav>
      {/* Header */}
      <Container>
        <header className="py-10 grid gap-10 grid-cols-1 text-plantaMainColor lg:grid-cols-2 ">
          {/* Text */}
          <div className="order-2 py-20  space-y-8 lg:order-1  lg:flex lg:flex-col lg:items-start lg:justify-evenly">
            <h1
              className={`text-7xl text-plantaMainColor font-bold max-w-lg  md:max-w-4xl md:text-9xl ${
                i18n.language == "ar" ? "lg:max-w-4xl" : "lg:max-w-2xl"
              }`}
            >
              {t("header.title")}
            </h1>
            <p className="max-w-lg text-2xl leading-[3rem] md:leading-[3rem] md:max-w-xl lg:leading-[3rem]  lg:max-w-4xl lg:text-3xl ">
              {t("header.text")}
            </p>
            <div className="flex items-center gap-x-5">
              <Link
                to="/"
                className="flex items-center gap-x-3 border border-plantaMainColor py-2 px-3 rounded-xl"
              >
                <img
                  src={appleImg}
                  alt="Apple image"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <p className="text-sm uppercase">Download on this</p>
                  <h4 className="text-2xl font-semibold">App Store</h4>
                </div>
              </Link>
              <Link
                to="/"
                className="flex items-center gap-x-3 border border-plantaMainColor py-2 px-3 rounded-xl"
              >
                <img
                  src={playStoreImg}
                  alt="Apple image"
                  className="w-12 h-12 object-contain"
                />
                <div className="flex flex-col items-start">
                  <p className="text-sm uppercase">Get it on</p>
                  <h4 className="text-2xl font-semibold">Google Play</h4>
                </div>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="order-1 flex justify-center items-center lg:order-2">
            <img
              src={img01}
              alt="header image"
              className="w-[25rem] object-contain"
            />
          </div>
        </header>
      </Container>
    </section>
  );
}
