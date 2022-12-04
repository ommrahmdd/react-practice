import React from "react";
import { items } from "./items.constant";
export default function Clients() {
  return (
    <section className="py-44 w-11/12 mx-auto space-y-20 md:w-10/12">
      <h3 className="text-white text-center text-3xl font-extralight">
        TRUSTED BY startups and large enterprises
      </h3>
      <div className="relative flex justify-between items-center lg:justify-evenly">
        <div className="absolute w-40 h-16 bg-gradient-to-r from-growfyBgColor to-transparent  top-0 left-0  md:w-72 lg:left-10"></div>
        {items.map((item, index) => (
          <div className="flex items-center space-x-1 md:space-x-3" key={index}>
            <img
              src={item.img}
              alt="Startup image"
              className="w-5 h-5 object-contain md:w-12 md:h-12 lg:w-16 lg:h-16"
            />
            <h6 className="text-lg text-growfySBtn capitalize md:text-4xl lg:font-bold">
              {item.title}
            </h6>
          </div>
        ))}
        <div className="absolute w-40 h-16 bg-gradient-to-l from-growfyBgColor to-transparent  top-0 -right-2 lg:right-10 md:w-72"></div>
      </div>
    </section>
  );
}
