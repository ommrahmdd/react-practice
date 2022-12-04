import { Link } from "react-router-dom";

import headerImg from "./../../assets/imgs/header2.png";

export default function Header() {
  return (
    <header className="h-screen relaitve w-11/12  mx-auto md:w-10/12 lg:w-9/12">
      <div className="relative w-full">
        <img
          src={headerImg}
          alt="header image"
          className="w-[25rem] h-[35rem] mx-auto object-contain  md:absolute md:-z-10-0 top-0  md:left-[80%] md:translate-x-[-80%] md:w-[35rem] md:h-[55rem] lg:left-[100%] lg:translate-x-[-100%]"
        />
        {/* Header Text */}
        <div className="min-h-[25rem] max-w-lg mt-7 mx-auto text-center relative z-10 flex flex-col justify-evenly items-center space-y-10 md:space-y-0 md:text-left md:mx-0 md:mt-0 md:min-h-[55rem] md:max-w-3xl lg:max-w-4xl md:items-start">
          <h1 className="bg-bgColor bg-opacity-40 text-6xl box-decoration-clone  md:leading-[6rem] font-bold md:text-8xl lg:text-9xl">
            <span className="block box-decoration-clone">
              Nice to meet you! I'm
            </span>
            <span className="underline underline-offset-[1rem] md:underline-offset-[2rem] decoration-pinkColor">
              Adam Keyes.
            </span>
          </h1>
          <p className="text-2xl max-w-xl">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Link
            to="/"
            className="text-2xl tracking-wide underline underline-offset-8 decoration-2 decoration-pinkColor"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Overlays */}
      {/* Cirlce */}
      <div className="w-40 h-40 bg-transparent border-2 border-white rounded-full absolute right-[1rem] bottom-[13rem] md:right-[49rem] md:bottom-[3rem]"></div>
      {/* Collection Of Circles */}

      <div className="absolute left-[1rem] top-[15rem] md:left-[5rem]">
        <div className="w-40 h-40 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-0 skew-x-[-30deg] skew-y-[-30deg]"></div>
        <div className="w-40 h-40 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-16 skew-x-[-30deg] skew-y-[-30deg]"></div>
        <div className="w-40 h-40 bg-transparent  border-2 border-white rounded-full absolute left-[5rem]  top-28 skew-x-[-30deg] skew-y-[-30deg]"></div>
      </div>
    </header>
  );
}
