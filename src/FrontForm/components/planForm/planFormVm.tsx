import React, { useState } from "react";
import { context } from "../../app/context";
import img01 from "./../../../assets/imgs/frontForm/icon-advanced.svg";
import img02 from "./../../../assets/imgs/frontForm/icon-arcade.svg";
import img03 from "./../../../assets/imgs/frontForm/icon-pro.svg";
export default function planFormVm() {
  let contextValue = React.useContext(context);
  let [checkedState, setCheckedState] = useState<boolean>(false);
  let [formRadioBtn, setFormRadioBtn] = useState<string>();

  let items = [
    {
      img: img02,
      title: "Arcade",
      price: {
        month: 9,
        year: 90,
      },
    },
    {
      img: img01,
      title: "Advanced",
      price: {
        month: 9,
        year: 90,
      },
    },
    {
      img: img03,
      title: "Pro",
      price: {
        month: 9,
        year: 90,
      },
    },
  ];
  let handleSwitchState = (checked: boolean) => {
    setCheckedState(!checkedState);
    if (!checked) {
      (contextValue as any).handlePlanDurationPrice({
        duration: "month",
        price: 9,
      });
    } else {
      (contextValue as any).handlePlanDurationPrice({
        duration: "year",
        price: 90,
      });
    }
    console.log((contextValue as any).globalForm);
  };
  let handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormRadioBtn(e.target.value);
    (contextValue as any).handlePlanType(e.target.value);
  };
  return {
    checkedState,
    handleSwitchState,
    items,
    formRadioBtn,
    handleFromChange,
  };
}
