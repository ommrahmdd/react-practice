import React from "react";
import { Container } from "../Container";
import useAbout from "./AboutViewModel";
export default function About() {
  let { items } = useAbout();
  return (
    <Container>
      <section className="py-16 grid gap-5 grid-cols-2 md:grid-cols-4">
        {items.map((item, index) => (
          <div className="px-4 py-8 flex flex-col items-center " key={index}>
            <img
              src={item.img}
              alt="About Image"
              className="w-28 h-28 object-contain mb-16"
            />
            <h5 className="text-white font-bold text-4xl mb-3 text-center">
              {item.title}
            </h5>
            <p className="text-white font-normal text-2xl max-w-sm text-center opacity-50">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </Container>
  );
}
