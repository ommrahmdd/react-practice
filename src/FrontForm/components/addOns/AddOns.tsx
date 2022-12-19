import React from "react";
import { Checkbox } from "antd";
import Header from "../Header";
import { MainBtn, SBtn } from "../Buttons";
import { context } from "./../../app/context";
import useAddOns from "./AddOnsVm";
export default function AddOns() {
  let contextValue = React.useContext(context);
  let { handleChange } = useAddOns();
  return (
    <div className="h-full flex flex-col items-start justify-between gap-y-10 lg:gap-y-0">
      <Header
        header="Pick add-ons"
        text="Add-ons help enhance your gaming experience"
      />
      <div className="w-full">
        <Checkbox.Group
          defaultValue={["online service"]}
          className="flex flex-col items-start w-full gap-y-5 lg:gap-y-8"
          onChange={handleChange}
        >
          <div className="bg-frontFormMagnolia py-8 px-6 border border-frontFormMarine rounded-lg w-full flex flex-row items-center space-y-2">
            <Checkbox value="online service" className="scale-125"></Checkbox>
            <div className="ml-6 flex items-center justify-between w-full">
              <div className="">
                <h3 className="font-semibold text-3xl text-frontFormMarine">
                  Online service
                </h3>
                <p className="text-2xl font-semibold text-frontFormCool">
                  Access to multiple games
                </p>
              </div>
              <div className="font-semibold text-2xl  text-frontFormCool">
                +$1/mo
              </div>
            </div>
          </div>
          <div className="bg-frontFormMagnolia py-8 px-6 border border-frontFormMarine rounded-lg w-full flex flex-row items-center space-y-2">
            <Checkbox value="Large storage" className="scale-125"></Checkbox>
            <div className="ml-6 flex items-center justify-between w-full">
              <div className="">
                <h3 className="font-semibold text-3xl text-frontFormMarine">
                  Large storage
                </h3>
                <p className="text-2xl font-semibold text-frontFormCool">
                  Extra 1TB of cloud save
                </p>
              </div>
              <div className="font-semibold text-2xl  text-frontFormCool">
                +$2/mo
              </div>
            </div>
          </div>
          <div className="bg-frontFormMagnolia py-8 px-6 border border-frontFormMarine rounded-lg w-full flex flex-row items-center space-y-2">
            <Checkbox
              value="Customizable Profile"
              className="scale-125"
            ></Checkbox>
            <div className="ml-6 flex items-center justify-between w-full">
              <div className="">
                <h3 className="font-semibold text-3xl text-frontFormMarine">
                  Customizable Profile
                </h3>
                <p className="text-2xl font-semibold text-frontFormCool">
                  Custom theme on your profile
                </p>
              </div>
              <div className="font-semibold text-2xl text-frontFormCool">
                +$3/mo
              </div>
            </div>
          </div>
        </Checkbox.Group>
      </div>
      <div className="w-full flex items-center justify-between">
        <SBtn text="Go Back" onClick={(contextValue as any).handlePrev} />
        <MainBtn text="Next Step" onClick={(contextValue as any).handleNext} />
      </div>
    </div>
  );
}
