import React, { useEffect } from "react";
import leftImg01 from "./../assets/imgs/frontForm/bg-sidebar-desktop.svg";
import PersonalForm from "./components/personalForm/PersonalForm";
import PlanForm from "./components/planForm/PlanForm";
import useFrontForm from "./FrontFormVm";

import { context } from "./app/context";
import AddOns from "./components/addOns/AddOns";
import Summary from "./components/summary/Summary";
import Thanks from "./components/thanks/Thanks";
export default function FrontForm() {
  let { sideBarItems } = useFrontForm();

  let activeForm = (React.useContext(context) as any).activeForm;
  return (
    <main className="bg-frontFormMagnolia h-screen max-w-full flex items-center justify-center">
      {/* Form Container */}
      <div className="h-full w-full bg-frontFormWhite shadow-lg rounded-3xl p-9 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-32 lg:w-[67%] lg:h-[78vh]">
        {/* STYLE: sidebar */}
        <div className="relative rounded-lg overflow-hidden h-[25%] lg:h-auto">
          {/* Overlay */}
          <img
            src={leftImg01}
            alt="sidebar image"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <ul className="relative z-10 p-16 space-x-10 flex flex-row items-center justify-center lg:flex-col lg:items-start lg:space-y-10 lg:space-x-0">
            {sideBarItems.map((item, index) => (
              <li className="flex items-center space-x-5 " key={index}>
                <div
                  className={`bg-transparent w-16 h-16 border-2 border-frontFormPastel rounded-full flex justify-center items-center text-2xl text-frontFormWhite font-bold ${
                    index + 1 === activeForm &&
                    "bg-white text-frontFormMarine border-frontFormMagnolia"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="hidden lg:block">
                  <p className="text-xl uppercase text-frontFormLight">
                    step {index + 1}
                  </p>
                  <p className="font-semibold text-frontFormWhite text-2xl uppercase tracking-wider">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* STYLE: main form */}
        <div className="py-10 w-[95%] absolute top-64 left-[50%] translate-x-[-50%] z-20  px-20 shadow-md rounded-xl bg-white lg:relative lg:top-0 lg:col-span-2 lg:w-full lg:shadow-none ">
          {activeForm == 1 ? (
            <PersonalForm />
          ) : activeForm == 2 ? (
            <PlanForm />
          ) : activeForm == 3 ? (
            <AddOns />
          ) : activeForm == 4 ? (
            <Summary />
          ) : activeForm === 5 ? (
            <Thanks />
          ) : null}
        </div>
      </div>
    </main>
  );
}
