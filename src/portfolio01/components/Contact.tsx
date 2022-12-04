import React from "react";
import useViewModel from "./ContactViewModel";
import Nav from "./Nav";
export default function Contact() {
  let { handleChange, state } = useViewModel();
  return (
    <section className="bg-sBgColor py-20">
      <div className="mx-auto w-11/12 grid gap-5 grid-cols-1 md:grid-cols-2 md:w-10/12 lg:w-9/12">
        <div className=" flex flex-col space-y-9 md:space-y-0 md:justify-evenly">
          <h3 className="text-5xl  md:text-6xl lg:text-8xl">Contact</h3>
          <p className="leading-8 max-w-lg  text-lg font-light  md:leading-[3rem] md:text-3xl md:max-w-2xl">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form action="" className="py-10">
          <div className="mb-16">
            <input
              type="text"
              placeholder="Name"
              className="py-5 px-10 text-2xl border-b-2 border-white bg-transparent w-full placeholder:text-lg md:placeholder:text-2xl outline-none"
              data-testid="name"
              name="name"
              value={state.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-16">
            <input
              type="email"
              placeholder="Email"
              className="py-5 px-10 text-2xl border-b-2 border-white bg-transparent w-full placeholder:text-lg md:placeholder:text-2xl outline-none"
              data-testid="email"
              name="email"
              value={state.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mb-16">
            <textarea
              placeholder="Message"
              className="py-5 px-10 text-2xl border-b-2 border-white bg-transparent w-full min-h-[15rem] placeholder:text-lg md:placeholder:text-2xl outline-none"
              data-testid="message"
              name="message"
              value={state.message}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </div>
      {/* Line */}
      <div className=" w-full h-[.1rem] block bg-white my-28"></div>
      <Nav />
    </section>
  );
}
