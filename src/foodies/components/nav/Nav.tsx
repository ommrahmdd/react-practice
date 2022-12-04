import React from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { FluidContainer } from "../Container";

export default function Nav() {
  let items = ["Home", "About", "Blog", "Account"];
  return (
    <FluidContainer>
      <nav className="text-white py-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-black uppercase">
          Foodies.
        </Link>
        {/* List */}
        <ul className="flex items-center space-x-16">
          {items.map((item, index) => (
            <li key={index} className="hidden md:block">
              <Link
                to="/"
                className="text-2xl transition-all duration-200 hover:opacity-25"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/"
              className="text-xl bg-foodiesYellowColor text-black py-1 px-3 rounded-lg uppercase"
            >
              Login
            </Link>
          </li>
          <li className="text-2xl cursor-pointer">
            <RiMenu3Fill />
          </li>
        </ul>
      </nav>
    </FluidContainer>
  );
}
