import React from "react";

export default function Header({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-frontFormMarine lg:text-5xl">
        {header}
      </h2>
      <p className="text-lg lg:text-2xl font-semibold text-frontFormLight">
        {text}
      </p>
    </div>
  );
}
