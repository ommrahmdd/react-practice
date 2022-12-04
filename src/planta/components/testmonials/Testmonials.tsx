import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import appleImage from "./../../../assets/imgs/planta/header/apple.png";
import playImage from "./../../../assets/imgs/planta/header/play.png";

import "./customSwiper.css";
export default function Testmonials() {
  let { t } = useTranslation();
  return (
    <section className="py-20">
      {/* ---------- STYLE: header */}
      <div className="text-center py-20 text-plantaMainColor">
        <h3 className="text-5xl font-bold md:text-6xl ">
          {t("testmonials.header.title")}
        </h3>
        <div className="my-10 flex justify-center items-center gap-x-3">
          <div className="flex justify-center items-center py-5 px-8 gap-x-2 rounded-full bg-plantaMainColorLight">
            <img
              src={appleImage}
              alt="apple image"
              className="w-8 h-8 object-contain"
            />
            <p className="text-xl font-semibold">
              {t("testmonials.header.apple")} 4.8
            </p>
          </div>
          <div className="flex justify-center items-center py-5 px-8 gap-x-2 rounded-full bg-plantaMainColorLight">
            <img
              src={playImage}
              alt="apple image"
              className="w-8 h-8 object-contain"
            />
            <p className="text-xl font-semibold">
              {t("testmonials.header.google")} 3.8
            </p>
          </div>
        </div>
      </div>
      {/* ---------- STYLE: swiper */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="py-10"
      >
        {[
          {
            title: "Totally amazing",
            text: "“Totally amazing. I have not used this app for long but my plants are looking much better and I am not stressing about when to water and feed them”",
          },
          {
            title: "Love it",
            text: "“I downloaded this app a few months ago and absolutely LOVE it. My plants have been thriving ever since.”",
          },
          {
            title: "Totally amazing",
            text: "“Totally amazing. I have not used this app for long but my plants are looking much better and I am not stressing about when to water and feed them”",
          },
        ].map((item, index) => (
          <SwiperSlide className="w-[65%] " key={index}>
            <div className=" my-5 py-8 px-16 bg-white rounded-[2rem] shadow-lg min-h-[19rem] flex flex-col items-start justify-evenly lg:min-h-[15rem]">
              <h2 className="text-3xl text-plantaMainColor font-semibold">
                {item.title}
              </h2>
              <p className="text-xl font-light md:text-2xl">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
