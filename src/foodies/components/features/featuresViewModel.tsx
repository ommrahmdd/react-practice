import React from "react";
import img01 from "./../../../assets/imgs/foodies/serv/01.png";
import img02 from "./../../../assets/imgs/foodies/serv/02.png";
export default function featuresViewModel() {
  const items = [
    {
      img: img01,
      title: "Fastest Food Delivery System",
      text: "Leo elementum ac nisl donec eget turpis gravida. Sit tellus ultricies in urna, odio sagittis est egestas vel. Venenatis amet, tempus porttitor dolor adipiscing nascetur. Neque commodo neque  varius tellus diam. Ultrices quam quisque sit eget integer pretium massa congue nunc.",
    },
    {
      img: img02,
      title: "Award winning services",
      text: "Leo elementum ac nisl donec eget turpis gravida. Sit tellus ultricies in urna, odio sagittis est egestas vel. Venenatis amet, tempus porttitor dolor adipiscing nascetur. Neque commodo neque  varius tellus diam. Ultrices quam quisque sit eget integer pretium massa congue nunc.",
    },
  ];

  return {
    items,
  };
}
