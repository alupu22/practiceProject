import castiLogo from "./assets/casti2.png";
import castiLogo2 from "./assets/casti.png";
import ceasLogo from "./assets/watches1.png";
import ceas2Logo from "./assets/watches2.png";
import laptopLogo from "./assets/mac.png";
import shoesLogo from "./assets/adidas.png";
import perfumeLogo from "./assets/parfum.png";
import ceas3Logo from "./assets/watches3.png";
import gameConsole from "./assets/gameConsole.png";
import ringLogo from "./assets/ring.png";
import presentLogo from "./assets/present.png";
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import braceletLogo from "./assets/bracelet.png";
import img1Details from "./assets/img1Details.png";
import img2Details from "./assets/img2Details.png";
import img3Details from "./assets/img3Details.png";

export const DISCOUNT_ITEMS = [
  {
    productTitle: "Headphones",
    imgSrc: castiLogo2,
    type: "Headphones Compact",
    discount: 20.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    properties: [
      "Material expose like metals",
      "Clear lines and geomatric figures",
      "Simple neutral colours",
      "Material expose like metals",
    ],
  },
  {
    productTitle: "Laptop",
    imgSrc: laptopLogo,
    type: "Laptop Fancy",
    discount: 25.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    properties: [
      "Material expose like metals",
      "Clear lines and geomatric figures",
      "Simple neutral colours",
      "15.6 inch",
    ],
  },
  {
    productTitle: "Other",
    imgSrc: presentLogo,
    type: "Other",
    discount: 30.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    properties: ["Other", "Other", "Other", "Other"],
  },
];

export const BLOGS = [
  {
    author: "Lupu Andra",
    imgSrc: blog1,
    datePublished: "21 August 2023",
    title: "Top essential Trends in 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
  },
  {
    author: "Spiridon Vlad",
    imgSrc: blog2,
    datePublished: "13 Iulie 2022",
    title: "Top essential Trends in 2022",
    description:
      "Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. ",
  },
  {
    author: "Flamanzanu Marian",
    imgSrc: blog3,
    datePublished: "29 Iunie 2021",
    title: "Top essential Trends in 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex.",
  },
];

export const PRODUCT_LIST = [
  {
    id: 1,
    imgSrc: ceasLogo,
    code: "Y523201",
    imgs: [img1Details, img2Details, img3Details],
    title: "Watches",
    oldPrice: 62.0,
    newPrice: 42.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 2,
    imgSrc: castiLogo,
    code: "Y523202",
    imgs: [img1Details, img2Details, img3Details],
    title: "Headphones",
    oldPrice: 99.0,
    newPrice: 90.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 3,
  },
  {
    id: 3,
    imgSrc: laptopLogo,
    code: "Y523203",
    imgs: [img1Details, img2Details, img3Details],
    title: "Laptop",
    oldPrice: 89.0,
    newPrice: 90.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 2,
  },
  {
    id: 4,
    imgSrc: ceas2Logo,
    code: "Y523204",
    imgs: [img1Details, img2Details, img3Details],
    title: "Black watches",
    oldPrice: 55.0,
    newPrice: 35.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 5,
    imgSrc: gameConsole,
    code: "Y523205",
    imgs: [img1Details, img2Details, img3Details],
    title: "Game Console",
    oldPrice: 89.0,
    newPrice: 76.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 6,
    imgSrc: shoesLogo,
    code: "Y523206",
    imgs: [img1Details, img2Details, img3Details],
    title: "Shoes",
    oldPrice: 75.0,
    newPrice: 57.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 7,
    imgSrc: perfumeLogo,
    code: "Y523207",
    imgs: [img1Details, img2Details, img3Details],
    title: "Perfume",
    oldPrice: 19.0,
    newPrice: 29.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 8,
    imgSrc: presentLogo,
    code: "Y523208",
    imgs: [img1Details, img2Details, img3Details],
    title: "Present box",
    oldPrice: 29.0,
    newPrice: 12.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 4,
  },
  {
    id: 9,
    imgSrc: braceletLogo,
    code: "Y523209",
    imgs: [img1Details, img2Details, img3Details],
    title: "Bracelet",
    oldPrice: 76.0,
    newPrice: 67.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 1,
  },
  {
    id: 10,
    imgSrc: ringLogo,
    code: "Y523210",
    imgs: [img1Details, img2Details, img3Details],
    title: "Ring",
    oldPrice: 65.0,
    newPrice: 56.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    stars: 5,
  },
];
