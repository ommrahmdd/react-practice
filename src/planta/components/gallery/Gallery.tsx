import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import img01 from "./../../../assets/imgs/planta/gallery/01.png";
import img02 from "./../../../assets/imgs/planta/gallery/02.png";
import img03 from "./../../../assets/imgs/planta/gallery/03.png";
import img04 from "./../../../assets/imgs/planta/gallery/04.png";
import img05 from "./../../../assets/imgs/planta/gallery/05.png";
import img06 from "./../../../assets/imgs/planta/gallery/06.png";

export default function Gallery() {
  let { t } = useTranslation();
  let imgs = [img01, img02, img03, img04, img05, img06];
  return (
    <section className="py-20">
      <Container>
        {/* Text */}
        <div className="text-center ">
          <h3 className="text-3xl text-plantaMainColor font-semibold md:text-7xl">
            <div className="">{t("gallery.title.01")}</div>
            <div className="">{t("gallery.title.02")}</div>
          </h3>
        </div>
        {/* Gallery */}
        <div className="my-20 grid gap-10 grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:max-h-[40rem]">
          {imgs.map((imgSrc, index) => (
            <div
              className={`overflow-hidden 
              ${index == 0 ? "rounded-br-full " : null} 
              ${index == 1 ? "rounded-full" : null}
              ${index == 2 ? "rounded-3xl rounded-bl-none" : null}
              ${
                index == 3
                  ? " rounded-tr-full rounded-bl-full lg:row-start-2 lg:row-end-3 lg:col-span-2"
                  : null
              }
              ${
                index == 4
                  ? "rounded-3xl rounded-br-none lg:col-start-3 lg:col-end-4"
                  : null
              }
              ${
                index == 5
                  ? " rounded-br-full lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3"
                  : null
              }`}
              key={index}
            >
              <img
                src={imgSrc}
                alt="gallery image"
                className="h-[40rem] w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
