import React from "react";
import { Container } from "../Container";
import SectionHeader from "../SectionHeader";

export default function Footer() {
  return (
    <Container relative={true}>
      <footer className="py-20 pb-48 z-10 relative ">
        <SectionHeader content="Call us for any queries." />
        <h4 className="text-4xl font-bold text-foodiesYellowColor text-center -mt-24 md:text-5xl ">
          +111 1234 2344 1232
        </h4>
        <div className="grid grid-cols-1 gap-20  my-36 lg:gap-5 lg:grid-cols-3 ">
          <h3 className="uppercase text-4xl text-white font-black">Foodies.</h3>
          <div className="text-2xl text-white font-extralight ">
            &copy;2022 | by{" "}
            <span className="text-foodiesPinkColor font-bold">ommrahmdd</span>
          </div>
          <div className="text-2xl text-white space-y-4 ">
            <p className="underline underline-offset-4 text-3xl">
              hello@templatesjungle.com
            </p>
            <p className="font-extralight max-w-sm leading-8 ">
              15Th Street Avenue, New York, USA011-554-8798-6556
            </p>
          </div>
        </div>
      </footer>
      {/* Overlay */}
      <div className="w-[40rem] h-[40rem] border-[4rem] border-foodiesPinkColor rounded-full absolute -bottom-[0rem] -right-[25rem] stroke-foodiesPinkColor flex items-center justify-center z-0 opacity-75">
        <div className="w-[25rem] h-[25rem] bg-foodiesPinkColor rounded-full"></div>
      </div>
    </Container>
  );
}
