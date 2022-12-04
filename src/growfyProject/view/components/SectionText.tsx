import React from "react";
import checkImg from "./../../../assets/imgs/growfy/helpSection/trueIcon.png";
import { MainBtn } from "./Buttons";
interface ISectionTextProps {
  header: string;
  title: string;
  text: string;
  btn?: string;
  list?: boolean;
  grid?: boolean;
}
export default function SectionText(props: ISectionTextProps) {
  return (
    <div
      className={`py-20 flex flex-col items-start space-y-14 justify-center ${
        props.grid || "md:w-1/2"
      } `}
    >
      <div className="text-growfyPColor border border-growfyPColor py-2 px-5 rounded-xl opacity-60">
        {props.header}
      </div>
      <h2 className="text-4xl text-white max-w-lg md:max-w-4xl md:text-7xl">
        {props.title}
      </h2>
      <p className="text-2xl text-growfyPColor leading-9 max-w-full md:max-w-2xl ">
        {props.text}
      </p>
      {props.btn && <MainBtn content={props.btn} />}
      {props.list && (
        <ul className="space-y-5">
          {new Array(4)
            .fill("This is some text inside of a div.")
            .map((item, index) => (
              <li className="flex items-center space-x-4" key={index}>
                <img src={checkImg} alt="Check Image" className="w-10 h-10" />
                <p className="text-growfyPColor text-lg md:text-xl">{item}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
