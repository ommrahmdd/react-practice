import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import Container from "../Container";
import SectionHeaderText from "../SectionHeaderText";
import { cards } from "./Cards.constant";

export default function Clients() {
  return (
    <Container>
      <div className="">
        {/* Header */}
        <SectionHeaderText
          header="testmonials"
          title="See what our clients say ."
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."
          btn="Get in touch"
        />
        {/* Cards */}
        <div className="py-20 grid grid-cols-1 gap-20 text-white md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              className="bg-growfySBtn bg-opacity-10 px-16 py-20 rounded-[3rem] space-y-10"
              key={index}
            >
              {/* Client */}
              <div className="flex  space-x-6">
                <img src={card.img} alt="Client Image" className="w-20" />
                <div className="flex flex-col items-start justify-evenly">
                  <h5 className="text-2xl tracking-wide font-light">
                    {card.name}
                  </h5>
                  <p className="text-growfyPColor tracking-widest">
                    {card.company}
                  </p>
                </div>
              </div>
              <h4 className="text-3xl max-w-sm  md:text-4xl">"{card.title}"</h4>
              <p className="text-xl text-growfyPColor font-extralight leading-8 max-w-sm">
                {card.text}
              </p>
              <div className="flex items-center space-x-1">
                {new Array(5).fill(0).map((star, index) => (
                  <AiTwotoneStar
                    key={index}
                    className="text-2xl text-growfyStarColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
