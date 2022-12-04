import React from "react";
import SectionText from "../SectionText";
import big from "./../../../../assets/imgs/growfy/helpSection/big.png";
import small from "./../../../../assets/imgs/growfy/helpSection/small.png";
import checkImg from "./../../../../assets/imgs/growfy/helpSection/trueIcon.png";
export default function Help() {
  return (
    <section className=" w-11/12 mx-auto py-10 flex flex-col gap-x-10 md:w-10/12  md:flex-row">
      {/* Images */}
      <div className="flex flex-row items-center overflow-hidden w-full md:items-end md:w-1/2 md:flex-row">
        <div className="w-4/5 h-[30rem] md:w-4/5 md:h-[60rem] ">
          <img
            src={big}
            alt="help image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-4/5  md:w-2/5">
          <img
            src={small}
            alt="help image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* Text */}
      <SectionText
        header="Why Choose Us"
        title="We help great brands scale with content marketing."
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          adipisci sunt? Magni ex, debitis perferendis optio veritatis deleniti
          quo est harum numquam eum."
        list={true}
      />
      {/* <div className="py-20 flex flex-col items-start space-y-14 justify-center md:w-1/2 ">
        <div className="text-growfyPColor border border-growfyPColor py-2 px-5 rounded-xl opacity-60">
          Why Choose Us
        </div>
        <h2 className="text-4xl text-white max-w-lg md:max-w-4xl md:text-7xl">
          We help great brands scale with content marketing.
        </h2>
        <p className="text-2xl text-growfyPColor leading-9 max-w-full md:max-w-2xl ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          adipisci sunt? Magni ex, debitis perferendis optio veritatis deleniti
          quo est harum numquam eum.
        </p>
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
      </div> */}
    </section>
  );
}
