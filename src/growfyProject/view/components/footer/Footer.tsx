import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainBtn } from "../Buttons";
import Container from "../Container";
import logoImage from "./../../../../assets/imgs/growfy/header/logo.png";
export default function Footer() {
  return (
    <Container>
      <footer className="space-y-32">
        {/*---------------------------------------------
        ----------------- Grid */}
        <div className="grid grid-cols-1 gap-10 space-y-9 lg:space-y-0 lg:grid-cols-3">
          {/* Col 1 */}
          <div className="space-y-16">
            <div className="flex items-center space-x-2">
              <img src={logoImage} alt="logo" className="h-12 w-12" />
              <p className="text-white font-bold text-3xl">Growfy</p>
            </div>
            <p className="text-growfyPColor max-w-lg text-2xl leading-9">
              Growfy is a template highly suitable for modern marketing
              agencies, digital studios, startups and businesses. The design is
              made in the dark style, which makes the site memorable and you can
              easily adapt it to your brand.
            </p>
            <div className="flex items-center space-x-5">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedin />,
                <FaTwitter />,
                <FaYoutube />,
              ].map((item, index) => (
                <Link to="" key={index}>
                  <div className="text-2xl text-growfyPColor flex justify-center items-center w-14 h-14 border rounded-full transition-all duration-200 ease-in-out hover:bg-growfyPColor  hover:bg-opacity-20 hover:text-growfyPrimaryBtn">
                    {item}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Col 2 */}
          <div className="grid grid-cols-2">
            <FooterColumns
              items={[
                "Home",
                "About",
                "Services",
                "Packages",
                "Blog",
                "Contact",
              ]}
              title="Pages"
            />
            <FooterColumns
              items={[
                "Instructions",
                "Style guide",
                "Licenses",
                "Changelog",
                "404 Not found",
                "Password protected",
              ]}
              title="Utility pages"
            />
          </div>
          {/* Col 3 */}
          <div className="space-y-14">
            <h3 className="text-2xl text-white">Subscribe to our newsletter</h3>
            <p className="text-growfyPColor text-xl max-w-sm">
              Lorem ipsum dolor sit am consectetur adipiscing
            </p>
            <form>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-2xl px-10 py-6 rounded-full bg-transparent border w-96 text-growfyPColor border-growfyPColor border-opacity-20"
                />
                <MainBtn content="Subscribe" />
              </div>
            </form>
          </div>
        </div>

        {/*---------------------------------------------
        ----------------- Copyrights */}
        <div className="space-y-20">
          <div className="w-full h-1 bg-growfySBtn bg-opacity-10"></div>
          <p className="text-center text-3xl text-growfyPColor tracking-[.1rem] font-extralight space-x-2">
            <span>&copy;</span>
            <span className="font-normal text-white">Glowfy</span> - Created by
            <span className="text-white font-light">@ommrahmdd</span>
          </p>
        </div>
      </footer>
    </Container>
  );
}

function FooterColumns({
  title,
  items,
}: {
  title: string;
  items: string[];
}): JSX.Element {
  return (
    <div className="space-y-16">
      <h3 className="text-2xl text-white">{title}</h3>
      <ul className="space-y-10 flex flex-col items-start">
        {items.map((item, index) => (
          <li
            className="text-xl text-growfyPColor transition-all duration-200 ease-in-out hover:opacity-40 inline-block"
            key={index}
          >
            <Link to="" className="inline-block">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
