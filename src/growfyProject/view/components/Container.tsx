import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-36 w-11/12 mx-auto md:w-10/12">{children}</section>
  );
}
