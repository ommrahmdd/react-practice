import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
export default function Nav() {
  let icons = [
    <AiFillFacebook />,
    <AiFillTwitterCircle />,
    <AiFillGithub />,
    <AiFillYoutube />,
  ];
  return (
    <nav className="mx-auto w-11/12 py-16 flex flex-col items-center space-y-10 md:flex-row md:items-center md:space-y-0 md:justify-between md:w-10/12 lg:w-9/12">
      <h3
        className="text-3xl font-normal md:text-4xl lg:text-5xl"
        aria-label="logo"
      >
        adamkeyes
      </h3>
      <ul className="space-y-2 flex justify-start items-center space-x-10 md:space-y-0 md:mt-0">
        {icons.map((icon, index) => (
          <li key={index} className="m-0 p-0" aria-label="navbar-icon">
            <Link to="/" className="text-3xl m-0 p-0 md:text-4xl lg:text-5xl">
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
