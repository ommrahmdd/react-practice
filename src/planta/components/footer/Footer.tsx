import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../Container";
import logo from "./../../../assets/imgs/planta/footer/logo.png";
export default function Footer() {
  let { t } = useTranslation();
  let nav = t("footer.navigation", { returnObjects: true }) as Array<string>;
  let contact = t("footer.contact", { returnObjects: true }) as Array<string>;
  let follow = t("footer.follow", { returnObjects: true }) as Array<string>;
  console.log(nav);
  return (
    <footer className="mt-5 py-20 bg-plantaMainColorDark text-white">
      <Container>
        <div className="grid gap-y-16 grid-cols-1  lg:grid-cols-4">
          {/* 01 */}
          <div className="">
            <img src={logo} alt="logo image" className="w-32" />
          </div>
          {/* وانت مربع 02 و 03 و 04 */}
          {[nav, contact, follow].map((bigItem, index) => (
            <ul className="space-y-10 flex flex-col items-start " key={index}>
              {bigItem.map((item, index) =>
                index === 0 ? (
                  <li
                    className={`capitalize text-3xl opacity-50text-3xl opacity-100 `}
                    key={index}
                  >
                    {item}
                  </li>
                ) : (
                  <li
                    className={`capitalize text-2xl opacity-50 transition-all duration-300 ease-in-out  hover:opacity-100 `}
                    key={index}
                  >
                    <Link to="">{item}</Link>
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
        <div className="text-center text-2xl my-10">
          &copy;2022 | <span className="font-extralight">By ommrahmdd</span>
        </div>
      </Container>
    </footer>
  );
}
