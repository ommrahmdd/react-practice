import React from "react";
import thankImg from "./../../../assets/imgs/frontForm/icon-thank-you.svg";
export default function Thanks() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-10 py-20 lg:py-0">
      <img src={thankImg} alt="Thank you image" />
      <h3 className="text-frontFormMarine text-2xl font-bold md:text-3xl lg:text-5xl ">
        Thank you!
      </h3>
      <p className="text-center max-w-full text-lg font-semibold text-frontFormCool md:max-w-xl lg:text-2xl lg:leading-9 lg:max-w-3xl">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
