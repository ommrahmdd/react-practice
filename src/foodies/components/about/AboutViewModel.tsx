import img01 from "./../../../assets/imgs/foodies/icons/01.png";
import img02 from "./../../../assets/imgs/foodies/icons/02.png";
import img03 from "./../../../assets/imgs/foodies/icons/03.png";
import img04 from "./../../../assets/imgs/foodies/icons/04.png";
import React from "react";

export default function AboutViewModel() {
  const items = [
    {
      img: img01,
      title: "100+ Options",
      text: "At in proin consequat ut cursus venenatis sapien.",
    },
    {
      img: img02,
      title: "Good Quality",
      text: "At in proin consequat ut cursus venenatis sapien.",
    },
    {
      img: img03,
      title: "Communication",
      text: "At in proin consequat ut cursus venenatis sapien.",
    },
    {
      img: img04,
      title: "Online Order",
      text: "At in proin consequat ut cursus venenatis sapien.",
    },
  ];
  return { items };
}
