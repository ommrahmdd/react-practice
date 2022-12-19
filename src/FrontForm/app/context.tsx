import React, { useState } from "react";
export const context: any = React.createContext(null);
export const Provider = context.Provider;

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // States
  let [activeForm, setActiveForm] = useState<number>(1);

  let [globalForm, setGlobalForm] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    addOns: ["online service"],
    plan: {
      type: "Arcade",
      duration: "year",
      price: "90",
    },
  });
  let personalInfo = globalForm.personalInfo;
  // Methods
  let handleNext = () => {
    setActiveForm(activeForm + 1);
    console.log(globalForm);
  };
  let handlePrev = () => {
    setActiveForm(activeForm - 1);
    console.log(globalForm);
  };
  let handlePersonalInfo = (personalInfo: {}) => {
    setGlobalForm((prevState: any) => {
      return {
        ...prevState,
        personalInfo,
      };
    });
  };
  let handleAddOns = (text: string[]) => {
    setGlobalForm((prevState: any) => {
      return {
        ...prevState,
        addOns: text,
      };
    });
  };
  let handlePlanType = (planType: string) => {
    setGlobalForm((prevState) => {
      return {
        ...prevState,
        plan: {
          ...prevState.plan,
          type: planType,
        },
      };
    });
  };
  let handlePlanDurationPrice = (durationPrice: {}) => {
    setGlobalForm((prevState) => {
      return {
        ...prevState,
        plan: {
          ...prevState.plan,
          ...durationPrice,
        },
      };
    });
  };

  let store = {
    personalInfo,
    globalForm,
    activeForm,
    handleNext,
    handlePrev,
    handleAddOns,
    handlePlanType,
    handlePlanDurationPrice,
    handlePersonalInfo,
  };

  return <context.Provider value={store}>{children}</context.Provider>;
}
