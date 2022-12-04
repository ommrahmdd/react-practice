import React from "react";

export function SBtn({ content }: { content: string }) {
  return (
    <button className="text-xl border-plantaMainColor border py-3 px-6 rounded-full font-medium text-plantaMainColor transition-all duration-300 cursor-pointer ease-in-out hover:text-white hover:bg-plantaMainColor">
      {content}
    </button>
  );
}
export function MainBtn({ content }: { content: string }) {
  return (
    <button className="text-xl border-plantaMainColor border py-5 px-9 rounded-full font-light text-white bg-plantaMainColor transition-all duration-300 capitalize cursor-pointer ease-in-out hover:text-plantaMainColor hover:bg-transparent">
      {content}
    </button>
  );
}
