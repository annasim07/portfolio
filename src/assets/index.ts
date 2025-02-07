// art
import glass_painting from "./art/glass_painting.jpg";
import clown from "./art/clown.jpg";
import french from "./art/french.png";
import gouache from "./art/gouache.jpg";
import sol from "./art/slice_of_life.jpg";
import still_life from "./art/still_life.jpg";

//digital
import me from "./digital/me.jpg";
import birdStudy from "./digital/bird_study.png";
import cat from "./digital/cat.png";
import doll from "./digital/doll.png";
import yellow from "./digital/yellow.png";
import peach_cat from "./digital/peach_cat.png";
import cupcake from "./digital/cupcake.png";
import girl_2 from "./digital/girl_2.png";

// baking
import bday from "./baking/bday.jpg";
import brownies from "./baking/brownies.png";
import glossy from "./baking/glossy.jpg";
import cinnamon from "./baking/cinnamon.jpg";
import cookies from "./baking/cookies.jpg";
import crookies from "./baking/crookie.jpg";
import creme from "./baking/creme_brulee.jpg";
import ice_cream from "./baking/ice_cream.jpg";
import lemon_candy from "./baking/lemon_candy.png";
import muffins from "./baking/muffins.jpg";
import puff from "./baking/puff_pastries.png";
import thanksgiving from "./baking/thanksgiving_cookies.jpg";

// travel
import bigbend from "./travel/bigbend.png";
import croissant from "./travel/croissants.jpg";
import dc from "./travel/dc.jpg";
import eiffel from "./travel/eiffel.jpg";
import elvis from "./travel/elvis.jpg";
import sparkles from "./travel/sparkles.jpg";
import la from "./travel/la.jpg";
import lisbon from "./travel/lisbon.jpg";
import london from "./travel/london.jpg";
import meze from "./travel/meze.jpg";
import porto from "./travel/porto.jpg";
import portugal from "./travel/portugal.jpg";
import punta_cana from "./travel/punta_cana.jpg";
import venice from "./travel/venice.jpg";

import { ImageObject } from "../types";

const artImages: Array<ImageObject> = [
  {
    src: glass_painting,
    alt: `"Demon Slayer" glass painting`,
  },
  {
    src: gouache,
    alt: "My favorite negative gouache project",
  },
  {
    src: french,
    alt: "A quick watercolor painting of a French building",
  },
  {
    src: sol,
    alt: "An ink drawing of my childhood dog excited for my mom to come home",
  },
  {
    src: still_life,
    alt: "An ink drawing of random household objects",
  },
  {
    src: clown,
    alt: "Explored the concepts of phobias -- Coulrophobia",
  },
];

const digitalArtImages: Array<ImageObject> = [
  {
    src: me,
    alt: "Illustration of me... kind of.",
  },
  {
    src: birdStudy,
    alt: "Practiced drawing birds",
  },
  {
    src: cat,
    alt: "Cute illustration of a cat hanging from a clothesline",
  },
  {
    src: doll,
    alt: "A portrait drawing of a girl with buns under bright sunlight",
  },
  {
    src: yellow,
    alt: "A portrait of a girl in yellow",
  },
  {
    src: peach_cat,
    alt: "A realistic drawing of a cat in peach pyjamas",
  },
  {
    src: cupcake,
    alt: "A doodle of a purple cupcake",
  },
  {
    src: girl_2,
    alt: "A watercolor illustration portrait",
  },
];

const bakingImages: Record<string, ImageObject> = {
  bday: {
    index: 0,
    src: bday,
    alt: "Baked muffins and brownies, and decorated my friend's birthday cake!",
  },
  brownies: {
    index: 1,
    src: brownies,
    alt: "Experimented with making red velvet cheesecake brownies, along with regular brownies",
  },
  cinnamon: {
    index: 2,
    src: cinnamon,
    alt: "Made pumpkin cinnamon rolls for the fall season!",
  },
  creme: {
    index: 3,
    src: creme,
    alt: "Crème brûlée at home 😋",
  },
  muffins: {
    index: 4,
    src: muffins,
    alt: "Made lemon muffins; some filled with blueberries and others topped with a crumble",
  },
  ice_cream: {
    index: 5,
    src: ice_cream,
    alt: "Made homemade strawberry ice cream during my ice cream making phase",
  },
  crookies: {
    index: 6,
    src: crookies,
    alt: `Recreated the viral croissant + cookie "crookie" trend`,
  },
  puff: {
    index: 7,
    src: puff,
    alt: "Added lots of various fillings to puff pastry",
  },
  thanksgiving: {
    index: 8,
    src: thanksgiving,
    alt: "Mini pie cookies and pumpkin filled snickerdoodles for Thanksgiving one year",
  },
  lemon: {
    index: 9,
    src: lemon_candy,
    alt: "Candified lemon as a cake topping",
  },
  cookies: {
    index: 10,
    src: cookies,
    alt: "Matcha and regular crumble cookies, filled with strawberries",
  },
  glossy: {
    index: 11,
    src: glossy,
    alt: "My favorite recipe that makes the glossiest brownies",
  },
};
// const bakingImages: Array<ImageObject> = [
//   {
//     src: bday,
//     alt: "",
//   },
//   {
//     src: brownies,
//     alt: "",
//   },
//   {
//     src: cinnamon,
//     alt: "",
//   },
//   {
//     src: creme,
//     alt: "",
//   },
//   {
//     src: muffins,
//     alt: "",
//   },
//   {
//     src: ice_cream,
//     alt: "",
//   },
//   {
//     src: crookies,
//     alt: "",
//   },
//   {
//     src: puff,
//     alt: "",
//   },
//   {
//     src: thanksgiving,
//     alt: "",
//   },
//   {
//     src: lemon_candy,
//     alt: "",
//   },
//   {
//     src: cookies,
//     alt: "",
//   },
//   {
//     src: glossy,
//     alt: "",
//   },
// ];

// const euImages: Array<ImageObject> = [
//   {
//     src: london,
//     alt: "",
//   },
//   {
//     src: porto,
//     alt: "",
//   },
//   {
//     src: croissant,
//     alt: "",
//   },
//   {
//     src: lisbon,
//     alt: "",
//   },
//   {
//     src: portugal,
//     alt: "",
//   },
//   {
//     src: eiffel,
//     alt: "",
//   },
//   {
//     src: venice,
//     alt: "",
//   },
// ];
const euImages: Record<string, ImageObject> = {
  london: {
    src: london,
    alt: "A stroll in London",
  },
  porto: {
    src: porto,
    alt: "View outside our Porto AirBnB",
  },
  croissant: {
    src: croissant,
    alt: "A massive croissant next to a regular sized croissant",
  },
  lisbon: {
    src: lisbon,
    alt: "Biblioteca Pública Municipal do Porto",
  },
  portugal: {
    src: portugal,
    alt: "Livraria Lello Library in Portugal",
  },
  eiffel: {
    src: eiffel,
    alt: "The Eiffel Tower with the Olympics rings",
  },
  venice: {
    src: venice,
    alt: "Picture of my roommate and I with gelato in Venice!",
  },
};

// const otherTravel: Array<ImageObject> = [
//   {
//     src: elvis,
//     alt: "Visited the Graceland on a roadtrip from Nashville",
//   },
//   {
//     src: dc,
//     alt: "Family trip to DC! There's Abe Lincoln",
//   },
//   {
//     src: bigbend,
//     alt: "Fun roadtrip to Big Bend/Marfa!",
//   },
//   {
//     src: la,
//     alt: "Cute photostrip picture at an ice cream shop in LA",
//   },
//   {
//     src: punta_cana,
//     alt: "Relaxing tropical picture from Punta Cana",
//   },
// ];
const otherTravel: Record<string, ImageObject> = {
  elvis: {
    src: elvis,
    alt: "Visited the Graceland on a roadtrip from Nashville",
  },
  dc: {
    src: dc,
    alt: "Family trip to DC! There's Abe Lincoln",
  },
  bigbend: {
    src: bigbend,
    alt: "Fun roadtrip to Big Bend/Marfa!",
  },
  la: {
    src: la,
    alt: "Cute photostrip picture at an ice cream shop in LA",
  },
  puntaCana: {
    src: punta_cana,
    alt: "Relaxing tropical picture from Punta Cana",
  },
};

export { artImages, digitalArtImages, bakingImages, euImages, otherTravel };
