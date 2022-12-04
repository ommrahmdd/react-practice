import React from "react";
import { Container } from "../Container";
import SectionHeader from "../SectionHeader";
import useQuestions from "./QuestionsViewModel";
export default function Questions() {
  let { imgs, items } = useQuestions();
  return (
    <Container>
      <section className="py-20 grid gap-20 grid-cols-1 lg:grid-cols-2">
        {/* Imgs */}
        <div className="flex md:justify-center md:relative ">
          <img
            src={imgs[0]}
            alt="Questions image"
            className="w-80 z-10  lg:top-10 lg:absolute lg:left-[10rem] "
          />
          <img
            src={imgs[1]}
            alt="Questions image"
            className="w-[30rem]   z-0 lg:top-10 lg:absolute lg:left-[20rem] "
          />
        </div>
        {/* Content */}
        <div className="">
          <SectionHeader content="Frequently asked questions" />
          <div className="">
            {items.map((item, index) => (
              <details
                className="border-b-[.1rem] border-gray-50 border-opacity-10 py-10 last-of-type:border-b-0"
                key={index}
              >
                <summary className="text-white text-2xl max-w-lg list-none cursor-pointer md:max-w-2xl md:text-3xl">
                  {item}
                </summary>
                <p
                  className="text-xl text-white  max-w-xl opacity-40 py-16 px-5  md:text-2xl  md:max-w-3xl"
                  style={{ lineHeight: "2.5rem" }}
                >
                  Adipiscing vitae maecenas vel sed massa id varius risus. Vitae
                  venenatis integer ut erat. Tincidunt turpis nascetur tristique
                  mi convallis tincidunt. Quam lectus sit tellus consequat.
                  Faucibus quis iaculis felis eu dui.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
