import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import SectionText from "../SectionText";
import img01 from "./../../../assets/imgs/planta/about/01.png";
import img02 from "./../../../assets/imgs/planta/about/02.png";
import img03 from "./../../../assets/imgs/planta/about/03.png";
import img04 from "./../../../assets/imgs/planta/about/04.png";
import icon01 from "./../../../assets/imgs/planta/about/icon01.png";
import icon02 from "./../../../assets/imgs/planta/about/icon02.png";
import icon03 from "./../../../assets/imgs/planta/about/icon03.png";
import icon04 from "./../../../assets/imgs/planta/about/icon04.png";
export default function About() {
  let { t, i18n } = useTranslation();
  return (
    <Container>
      <section className="py-10">
        {/* --------------------------- STYLE: 01 */}
        <div className="py-20 grid gap-y-16 gap-x-24 grid-cols-1 lg:gap-y-8 lg:grid-cols-2">
          <div className="flex items-center justify-center relative">
            <div className="absolute top-0 left-0 bg-white text-plantaMainColor text-xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4">
              <img src={icon01} alt="about image" className="w-8 " />
              <p>{t("about.01.quote")}</p>
            </div>
            <img src={img01} alt="About Image" className="w-[45rem]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <SectionText
              header={`${t("about.01.header")}`}
              text={`${t("about.01.text")}`}
              title={`${t("about.01.title")}`}
            />
          </div>
        </div>
        {/* ------------------------------------- */}
        {/* --------------------------- STYLE: 02 */}
        <div className="py-20 grid gap-y-16 gap-x-24 grid-cols-1 lg:gap-y-8 lg:grid-cols-2">
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute top-0 right-0 bg-white text-plantaMainColor text-xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4">
              <img src={icon02} alt="about image" className="w-8 " />
              <p>{t("about.02.quote")}</p>
            </div>
            <img
              src={img02}
              alt="About Image"
              className="w-[45rem] rounded-full"
            />
          </div>
          <div className=" flex flex-col items-start justify-center order-2 lg:order-1">
            <SectionText
              header={`${t("about.02.header")}`}
              text={`${t("about.02.text")}`}
              title={`${t("about.02.title")}`}
            />
          </div>
        </div>
        {/* ------------------------------------- */}
        {/* --------------------------- STYLE: 03 */}
        <div className="py-20 grid gap-y-16 gap-x-24 grid-cols-1 lg:gap-y-8 lg:grid-cols-2">
          <div className="relative flex items-center justify-center ">
            <div className="absolute bottom-0 left-0 bg-white text-plantaMainColor text-xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4">
              <img src={icon03} alt="about image" className="w-8 " />
              <p>{t("about.03.quote")}</p>
            </div>
            <img
              src={img03}
              alt="About Image"
              className="w-[45rem] rounded-tr-full rounded-br-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <SectionText
              header={`${t("about.03.header")}`}
              text={`${t("about.03.text")}`}
              title={`${t("about.03.title")}`}
            />
          </div>
        </div>
        {/* ------------------------------------- */}
        {/* --------------------------- STYLE: 02 */}
        <div className="py-20 grid gap-y-16 gap-x-24 grid-cols-1 lg:gap-y-8 lg:grid-cols-2">
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute top-20 left-20 bg-white text-plantaMainColor text-xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4">
              <img src={icon04} alt="about image" className="w-8 " />
              <p>{t("about.04.quote")}</p>
            </div>
            <img
              src={img04}
              alt="About Image"
              className="w-[45rem] rounded-[10rem]"
            />
          </div>
          <div className=" flex flex-col items-start justify-center order-2 lg:order-1">
            <SectionText
              header={`${t("about.04.header")}`}
              text={`${t("about.04.text")}`}
              title={`${t("about.04.title")}`}
            />
          </div>
        </div>
        {/* ------------------------------------- */}
      </section>
    </Container>
  );
}
