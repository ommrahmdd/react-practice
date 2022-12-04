import React from "react";
import { Container } from "../Container";
import SectionHeader from "../SectionHeader";
import img01 from "./../../../assets/imgs/foodies/icons/04.png";
export default function Testimonials() {
  return (
    <Container relative={true}>
      <section className="relative z-10">
        <SectionHeader content="Our Testimonials" />
        {/* content */}
        <div className="py-10 flex items-center justify-center">
          <div className="flex items-center space-x-20 md:space-x-32">
            <img
              src={img01}
              alt="testimonials image"
              className="h-32 w-32 object-contain"
            />
            <div className="py-20 space-y-28">
              <p className="text-xl max-w-5xl text-white leading-[2.5rem] md:leading-[4rem] md:text-5xl">
                Food is amazing and delivered quickly. Excellent communication
                skills made things much simpler and faster.{" "}
              </p>
              <h6 className="text-xl text-white font-extralight md:text-2xl">
                Dr. Steve Watson,{" "}
                <span className="font-medium">Greenland Studio in.</span>
              </h6>
            </div>
          </div>
        </div>
      </section>
      {/* Overylay */}
      <div className="absolute -top-32 -left-48 w-[80rem] h-[80rem] rounded-full bg-foodiesBlueColor bg-opacity-30"></div>
    </Container>
  );
}
