import { Image } from "@heroui/react";
import { artImages, digitalArtImages } from "../../assets";
import { ImageCarousel } from '../../components'

import bunny from "../../assets/digital/bunny.png";

import "../Common.scss";

function Art() {
  return (
    <div className="container">
      <div className="flex flex-row justify-center text-center gap-24">
        <div>
          <h1>Physical</h1>
          <ImageCarousel images={artImages} />
        </div>
        <div>
          <h1>Digital</h1>
          <ImageCarousel images={digitalArtImages} />
        </div>
      </div>
      <Image
        src={bunny}
        width={150}
        alt="Illustration I did of a bunny holding an umbrella"
        className="flex relative bottom-0"
      />
    </div>
  );
}

export default Art;
