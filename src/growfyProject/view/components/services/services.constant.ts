import likeImg from "./../../../../assets/imgs/growfy/services/like.png";
import dolarImg from "./../../../../assets/imgs/growfy/services/dolar.png";
import messageImg from "./../../../../assets/imgs/growfy/services/message.png";
import searchImg from "./../../../../assets/imgs/growfy/services/search.png";

export const servicesItems: {
  img: string;
  title: string;
  overview: string;
}[] = [
  {
    img: likeImg,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.",
    title: "Social Media Marketing",
  },
  {
    img: messageImg,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.",
    title: "Email Marketing",
  },
  {
    img: dolarImg,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.",
    title: "Paid Advertising",
  },

  {
    img: searchImg,
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.",
    title: "SEO Optimization",
  },
];
