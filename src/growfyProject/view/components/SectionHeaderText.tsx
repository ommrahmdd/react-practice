import React from "react";
import { ISectionHeaderText } from "../../model/ISectionHeaderText.model";
import { MainBtn } from "./Buttons";

export default function SectionHeaderText({
  btn,
  header,
  text,
  title,
}: ISectionHeaderText) {
  return (
    <div className="w-full space-y-8">
      <div className="text-growfySBtn uppercase py-4 px-7 border border-growfySBtn border-opacity-20 inline-block rounded-2xl ">
        {header}
      </div>
      <h3 className="text-white text-4xl max-w-3xl lg:text-6xl">{title}</h3>
      <div className="flex flex-col items-start space-y-9 md:space-y-0 md:flex-row md:items-end md:justify-between">
        <p className="text-growfyPColor text-xl font-extralight md:max-w-3xl lg:max-w-5xl  md:text-2xl">
          {text}
        </p>
        <MainBtn content="Get in touch" />
      </div>
    </div>
  );
}
