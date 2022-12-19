import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
  w-11/12 mx-auto md:w-10/12"
    >
      {children}
    </div>
  );
}
