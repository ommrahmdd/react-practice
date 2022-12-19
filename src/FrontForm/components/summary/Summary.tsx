import React from "react";
import Header from "../Header";
import { context } from "../../app/context";
import { MainBtn, SBtn } from "../Buttons";
export default function Summary() {
  let contextValue = (React.useContext(context) as any).globalForm;
  let contextMethods = React.useContext(context) as any;
  return (
    <div className="h-full flex flex-col items-start justify-around gap-y-24 lg:gap-y-0">
      <Header
        header="Finishing up"
        text="Double-check everything looks OK before confirming"
      />
      {/* Content */}
      <div className="w-full bg-frontFormMagnolia rounded-2xl">
        <div className="flex flex-col items-start py-9 px-8">
          {/* Type and duration */}
          {
            <div className="w-full flex items-center justify-between py-8 text-xl text-frontFormMarine font-semibold border-b border-frontFormCool border-opacity-30  md:text-2xl ">
              <div className="">
                {contextValue.plan.type}{" "}
                <span>({contextValue.plan.duration})</span>
              </div>
              <div className="">
                ${contextValue.plan.price}/
                {contextValue.plan.duration.slice(0, 2)}
              </div>
            </div>
          }
          {/* ons */}
          <ul className="w-full">
            {(contextValue as any).addOns.map((ons: string, index: number) => (
              <li
                className="w-full flex items-center justify-between py-8 text-xl text-frontFormMarine font-semibold capitalize border-b border-frontFormCool border-opacity-30 last-of-type:border-none md:text-2xl "
                key={index}
              >
                <div className="">{ons}</div>
                <div className="">
                  {(contextValue as any).plan.duration === "month"
                    ? "$1/mo"
                    : "$10/ye"}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Buttons */}
      <div className="w-full flex items-center justify-between">
        <SBtn text="Go Back" onClick={(contextMethods as any).handlePrev} />
        <MainBtn text="Confirm" onClick={(contextMethods as any).handleNext} />
      </div>
    </div>
  );
}
