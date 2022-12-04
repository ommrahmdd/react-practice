import React from "react";
import { Container } from "../Container";
import useFeatures from "./featuresViewModel";

export default function Features() {
  let { items } = useFeatures();

  return (
    <Container relative={true}>
      <section className="py-16 space-y-16">
        {items.map((item, index) => (
          <div
            className="py-16 grid grid-cols-1 gap-5 lg:grid-cols-2"
            key={index}
          >
            <img
              src={item.img}
              alt="Features image"
              className={`${index === 1 ? " order-1 lg:order-2" : null}`}
            />
            <div
              className={`space-y-10 ${
                index === 1 ? "order-2  lg:order-1" : null
              }`}
            >
              <h2 className="text-5xl text-white font-bold max-w-2xl lg:text-6xl">
                {item.title}
              </h2>
              <p className="text-white text-3xl font-light max-w-4xl opacity-50 leading-[3.5rem]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
        {/* Overylay */}
        <div className="absolute top-[10rem] -right-48 w-[60rem] h-[60rem] rounded-full bg-foodiesBlueColor bg-opacity-30"></div>
      </section>
    </Container>
  );
}
