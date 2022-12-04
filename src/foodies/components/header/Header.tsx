import React from "react";
import { Container } from "../Container";
import img01 from "./../../../assets/imgs/foodies/header/01.png";
import img02 from "./../../../assets/imgs/foodies/header/02.png";
export default function Header() {
  return (
    <Container>
      <header className="py-52  overflow-x-hidden">
        {/* Txt */}
        <div className="text-white space-y-10 z-20 relative">
          <h1 className="text-8xl font-black uppercase max-w-2xl md:text-9xl md:max-w-5xl">
            Delicious food for you
          </h1>
          <p className="text-2xl max-w-lg font-light md:text-3xl md:leading-9">
            At in proin consequat ut cursus proin consequat ut cursus proin
            consequat ut cursus venenatis sapien.
          </p>
        </div>
        {/* Images */}
        {/* <div className="absolute flex right-0 top-52 z-0"></div> */}
        <img
          src={img01}
          alt="header image"
          className="w-[50rem] absolute right-64 z-10 top-52 opacity-20 md:opacity-100"
        />
        <img
          src={img02}
          alt="header image"
          className="w-[50rem] absolute -right-10 top-52 opacity-20 md:opacity-100 md:-right-16"
        />
      </header>
    </Container>
  );
}
