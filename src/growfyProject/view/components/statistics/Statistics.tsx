import React from "react";
import stat_img from "./../../../../assets/imgs/growfy/statistics.png";
export default function Statistics() {
  return (
    <section className="w-11/12 mx-auto py-52 grid grid-cols-1 gap-16 md:grid-cols-3 md:w-10/12">
      {["1.2M+", "3.4B", "98%", "10+"].map((item, index) => (
        <div
          className="order-2 bg-growfySBtn bg-opacity-10 px-8 py-12 flex flex-col justify-evenly rounded-[3rem] space-y-5 lg:space-y-0"
          key={index}
        >
          <h3 className="text-4xl text-white md:text-6xl">{item}</h3>
          <p className="text-xl text-growfyPColor font-light  md:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim.
          </p>
        </div>
      ))}
      <div className="w-4/5 order-1  md:col-start-3 md:col-end-4 md:row-start-1  md:row-span-2 ">
        <img src={stat_img} alt="statistics image" className="object-cover" />
      </div>
    </section>
  );
}
