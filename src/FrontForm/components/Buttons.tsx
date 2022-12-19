import React from "react";

export function MainBtn(props: any) {
  return (
    <button
      {...props}
      className="py-3 px-8 bg-frontFormMarine text-white text-xl cursor-pointer. capitalize rounded-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-frontFormMarine"
    >
      {props.text}
    </button>
  );
}
export function SBtn(props: any) {
  return (
    <button
      {...props}
      className="py-3 px-8 text-frontFormMarine border border-frontFormMarine  text-xl cursor-pointer. capitalize rounded-xl  transition-all duration-300 ease-in-out hover:bg-frontFormPurplish hover:text-white"
    >
      {props.text}
    </button>
  );
}
