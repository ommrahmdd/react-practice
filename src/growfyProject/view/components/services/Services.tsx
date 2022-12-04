import React from "react";
import { MainBtn } from "../Buttons";
import SectionText from "../SectionText";
import { servicesItems } from "./services.constant";
export default function Services() {
  return (
    <section className="py-10 w-11/12 mx-auto grid grid-cols-1 gap-y-10 md:grid-y-0 md:grid-cols-2 md:w-10/12">
      {/* Text */}
      {/* <div className="flex flex-col items-start space-y-10 justify-center">
        <div className="text-growfyPColor border border-growfyPColor py-2 px-5 rounded-xl opacity-60">
          Services
        </div>
        <h2 className="text-4xl md:text-7xl text-white">Services we offer</h2>
        <p className="text-2xl text-growfyPColor leading-9 max-w-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          adipisci sunt? Magni ex, debitis perferendis optio veritatis deleniti
          quo est harum numquam eum.
        </p>
        <MainBtn content="All Services" />
      </div> */}
      <SectionText
        header="Services"
        title="Services we offer"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          adipisci sunt? Magni ex, debitis perferendis optio veritatis deleniti
          quo est harum numquam eum."
        btn="All services"
        grid={true}
      />
      {/* Services */}
      <div className="grid grid-cols-2 gap-14">
        <div className="space-y-6 py-16">
          {servicesItems.slice(0, 2).map((item, index) => (
            <div
              className={`bg-growfyPColor bg-opacity-10 px-5 py-20 rounded-[3rem] space-y-5 md:px-10 ${
                index === 0 && "-ml-5"
              }`}
              key={index}
            >
              <img
                src={item.img}
                alt="service image"
                className="w-16 h-16 object-contain md:w-24 md:h-24"
              />
              <h3 className="text-2xl  text-white md:text-3xl">{item.title}</h3>
              <p className="text-xl max-w-sm text-growfyPColor font-extralight">
                {item.overview}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-9">
          {servicesItems.slice(2, 4).map((item, index) => (
            <div
              className="bg-growfyPColor bg-opacity-10 px-5 py-20 rounded-[3rem] space-y-5 md:px-10"
              key={index}
            >
              <img
                src={item.img}
                alt="service image"
                className="w-16 h-16  object-contain md:w-24 md:h-24"
              />
              <h3 className="text-2xl  text-white md:text-3xl">{item.title}</h3>
              <p className="text-xl max-w-sm text-growfyPColor font-extralight">
                {item.overview}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
