import React from "react";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
export default function Home() {
  let links = ["/portfolio01", "/growfy", "/foodies", "/planta"];
  return (
    <main className="min-h-screen  bg-growfyBgColor text-white flex flex-col  items-start justify-center ">
      <div className="w-11/12 mx-auto md:w-10/12 lg:w-9/12">
        {/* Text */}
        <div className="text-3xl space-y-3 max-w-2xl  md:max-w-6xl  md:text-4xl lg:max-w-7xl">
          <div className="flex opacity-70">
            Hi
            <span className="px-5">
              <MdWavingHand />
            </span>
          </div>
          <div className=" opacity-70">
            I want to tell you that is not a real project, It's just a
            collection of landing pages which I trying to apply and use some of
            patterns/pacakges like
          </div>
          <div className="flex flex-col items-start md:flex-row md:space-x-5 ">
            {[
              "MVVM arch pattern,",
              "Jest & RTL,",
              "Tailwind,",
              "i18n,",
              "a11y",
              "and more..",
            ].map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        {/* Links */}
        <ul className="text-2xl my-10 flex flex-col items-start space-y-2 md:text-3xl">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item}
                className="flex items-center gap-x-3 capitalize transition-all duration-300 ease-in-out hover:gap-x-6"
              >
                <span>{item}</span>
                <BiRightArrowAlt className="text-5xl" />
              </Link>
            </li>
          ))}
        </ul>
        {/* description */}
        <div className="text-2xl md:text-3xl">
          description and template provided in my{" "}
          <a
            href="https://github.com/ommrahmdd"
            target="_blank"
            className="border-white border-b-2 "
          >
            github
          </a>
        </div>
      </div>
    </main>
  );
}
