import React from "react";
import { Switch } from "antd";
import { context } from "../../app/context";
import Header from "../Header";
import usePlanForm from "./planFormVm";

import "./planForm.css";
import { MainBtn, SBtn } from "../Buttons";

export default function PlanForm() {
  let contextValue = React.useContext(context);
  console.log(contextValue as any);
  let {
    items,
    checkedState,
    handleSwitchState,
    handleFromChange,
    formRadioBtn,
  } = usePlanForm();

  return (
    <div className="h-full w-full flex flex-col items-start justify-around gap-y-5 lg:gap-y-0">
      <Header
        header="Select your plan"
        text="You have the option to monthly or yearly billing"
      />
      {/* Content */}
      <div className="w-full">
        <form
          action=""
          className="flex flex-col items-start gap-y-16 lg:gap-y-10"
        >
          {/* Items */}
          <div className="w-full flex items-center justify-evenly gap-x-10 lg:gap-x-16">
            {items.map((item, index) => (
              <div
                className="radioContainer relative z-10 cursor-pointer py-10 px-5 border border-frontFormMarine rounded-xl  min-w-[8rem] md:min-w-[13rem] lg:min-w-[16rem] "
                key={index}
              >
                <input
                  type="radio"
                  name="plan"
                  value={item.title}
                  className="absolute  opacity-0 top-0 left-0 h-full w-full"
                  onChange={handleFromChange}
                  defaultChecked={(contextValue as any).globalForm.plan.type}
                />
                <label htmlFor="" className="block cursor-pointer">
                  <img
                    src={item.img}
                    alt="arcade image"
                    className="w-14 h-14 object-contain mb-10 lg:w-20 lg:h-20"
                  />
                  <p className="font-bold text-xl text-frontFormMarine mb-3 md:text-2xl lg:text-3xl">
                    {item.title}
                  </p>
                  <p className="text-lg text-frontFormCool">
                    {checkedState === true
                      ? `$${item.price.month}/mo`
                      : `$${item.price.year}/year`}
                  </p>
                  {checkedState == false ? (
                    <p className="text-sm text-frontFormMarine my-2 font-semibold lg:text-xl">
                      2 months free
                    </p>
                  ) : null}
                </label>
              </div>
            ))}
          </div>
          {/* Switch */}
          <div className="w-full py-10 bg-frontFormMagnolia rounded-xl flex items-center justify-center">
            <p
              className={`text-2xl font-semibold  ${
                checkedState === true
                  ? "text-frontFormMarine"
                  : "text-frontFormPastel"
              }`}
            >
              Monthly
            </p>
            <Switch
              defaultChecked
              className="mx-10"
              onChange={handleSwitchState}
            />
            <p
              className={`text-2xl font-semibold  ${
                !checkedState ? "text-frontFormMarine" : "text-frontFormPastel"
              }`}
            >
              Yearly
            </p>
          </div>
          {/* Error  */}

          {/* Submit */}
          <div className="w-full flex items-center justify-between">
            <SBtn
              type="button"
              text="Go Back"
              onClick={(contextValue as any).handlePrev}
            />
            <MainBtn
              type="submit"
              text="Next Step"
              onClick={(contextValue as any).handleNext}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
