import React from "react";

export function Container({
  children,
  relative,
}: {
  children: React.ReactNode;
  relative?: boolean;
}) {
  return (
    <div className={`w-11/12 mx-auto md:w-10/12 ${relative ? "relative" : ""}`}>
      {children}
    </div>
  );
}
export function FluidContainer({ children }: { children: React.ReactNode }) {
  return <div className="w-11/12 mx-auto ">{children}</div>;
}
