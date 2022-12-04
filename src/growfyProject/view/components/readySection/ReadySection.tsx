import React from "react";
import { MainBtn, SBtn } from "../Buttons";
import Container from "../Container";

export default function ReadySection() {
  return (
    <Container>
      <div className="bg-growfyPColor bg-opacity-10 px-10 py-20 rounded-[2rem] grid grid-cols-1   space-y-10 md:space-y-0 md:grid-cols-2">
        {/* Text */}
        <div className="space-y-4 text-center flex flex-col items-center md:space-y-8">
          <h3
            className="text-white text-3xl max-w-xl md:text-5xl"
            style={{
              lineHeight: "3.2rem",
            }}
          >
            Ready to start scaling your business now?
          </h3>
          <p className="text-growfyPColor text-xl max-w-sm">
            Lorem ipsum dolor sit am consectetur adipiscing varius enim in eros.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center space-x-7">
          <MainBtn content="Our Services" />
          <SBtn content="Contact us" />
        </div>
      </div>
    </Container>
  );
}
