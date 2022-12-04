import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "./../../../../assets/imgs/growfy/header/logo.png";
import img01 from "./../../../../assets/imgs/growfy/header/1.png";
import img02 from "./../../../../assets/imgs/growfy/header/2.png";
import img03 from "./../../../../assets/imgs/growfy/header/3.png";
import img04 from "./../../../../assets/imgs/growfy/header/4.png";
import overlay from "./../../../../assets/imgs/growfy/header/overlay.png";
import { MainBtn, SBtn } from "../Buttons";
export default function Header() {
  let navItems = ["home", "about", "pages", "services"];
  return (
    <header className="py-5 min-h-screen w-11/12 mx-auto md:w-10/12">
      {/* STYLE: ------------------ Nav */}
      <nav className="py-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="" className="flex items-center space-x-2" data-testid="logo">
          <img src={logo} alt="logo image" className="w-9 h-9" />
          <h5 className="text-white text-3xl font-bold capitalize">Growfy</h5>
        </Link>
        {/* navbar */}
        <ul className="text-white  items-center space-x-[3.5rem] hidden md:flex">
          {navItems.map((item, index) => (
            <li className="text-2xl font-light capitalize" key={index}>
              <Link to="">{item}</Link>
            </li>
          ))}
          <li className="text-2xl font-light capitalize">
            <Link to="" className="flex items-center space-x-2">
              <span>Cart</span>
              <p className="bg-growfySBtn bg-opacity-20 rounded-full  w-9 h-9 flex justify-center items-center  text-lg">
                0
              </p>
            </Link>
          </li>
          <li className="text-xl font-normal capitalize bg-growfyPrimaryBtn p-6 px-9 rounded-[4rem] tracking-widest">
            <Link to="">Get Started</Link>
          </li>
        </ul>
        {/* Menu */}
        <button className="text-4xl text-white cursor-pointer md:hidden">
          <HiMenuAlt3 />
        </button>
      </nav>
      {/* STYLE: ------------------ Header */}
      <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Text content */}
        <div className="relative text-white flex flex-col items-start space-y-10 py-32 md:space-y-0 md:justify-evenly md:py-52">
          <img
            src={overlay}
            alt="header overlay"
            className="absolute w-48 h-48 top-24 -left-10 z-0 md:top-56 md:-left-10"
          />
          <h1 className="text-6xl max-w-2xl md:max-w-5xl  md:text-8xl">
            Marketing solutions that grow your business.
          </h1>
          <p className="max-w-lg text-lg text-growfyPColor leading-6 md:leading-8 md:max-w-3xl md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor.
          </p>
          <div className="space-x-3">
            <MainBtn content="Our Services" />
            <SBtn content="Contact Us" />
          </div>
        </div>
        {/* Images */}
        <div className="grid grid-cols-2 grid-rows-3 outline-1 max-h-[70rem] gap-y-12">
          <div className="row-start-1 row-end-3 col-span-1 h-full w-full">
            <img
              src={img01}
              alt="header image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={img02}
              alt="header image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="row-start-2 row-end-4 h-full w-full">
            <img
              src={img04}
              alt="header image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="row-start-3 row-end-4 w-full h-full">
            <img
              src={img03}
              alt="header image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
