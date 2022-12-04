import React from "react";
import img01 from "./../../../assets/imgs/foodies/questions/01.png";
import img02 from "./../../../assets/imgs/foodies/questions/02.png";
export default function QuestionsViewModel() {
  let items = [
    "Adipiscing vitae maecenas vel sed massa id varius risus?",
    "Vitae venenatis integer ut erat?",
    "Tincidunt turpis nascetur tristique mi convallis ",
    "tincidunt?",
    "Quam lectus sit tellus consequat?",
  ];
  let imgs = [img01, img02];
  return {
    items,
    imgs,
  };
}
