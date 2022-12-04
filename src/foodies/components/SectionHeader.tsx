import React from "react";

export default function SectionHeader({ content }: { content: string }) {
  return (
    <h3 className="text-4xl font-bold uppercase text-foodiesPinkColor text-center mb-32 md:text-5xl">
      {content}
    </h3>
  );
}
