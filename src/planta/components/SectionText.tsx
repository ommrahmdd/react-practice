import React from "react";
import { useTranslation } from "react-i18next";
import { MainBtn } from "./Buttons";

export default function SectionText({
  header,
  title,
  text,
}: {
  header: string;
  title: string;
  text: string;
}) {
  let { t } = useTranslation();
  return (
    <div className=" space-y-10 text-plantaMainColor">
      <p className="text-2xl">{header}</p>
      <h3 className="text-6xl font-semibold md:text-8xl">{title}</h3>
      <p className="text-3xl leading-[2.9rem] max-w-xl md:max-w-2xl lg:max-w-3xl">
        {text}
      </p>
      <MainBtn content={`${t("about.download")}`} />
    </div>
  );
}
