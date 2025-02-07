import { bakingImages } from "../../assets";

import "./Baking.scss";
import "../Common.scss";
import { useState } from "react";
import { MasonryImage } from "../../components"

export default function Baking() {
  const [hoveredIndex, setHoveredIndex] = useState<Number | null>(null);

  return (
    <div className="wrapper w-6xl grid grid-cols-2 md:grid-cols-3 gap-4 justify-self-center">
      <div className="grid gap-4">
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.bday}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.cinnamon}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.muffins}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.cookies}
        />
      </div>
      <div className="grid gap-2">
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.creme}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.brownies}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.lemon}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.thanksgiving}
        />
      </div>
      <div className="grid gap-2">
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.ice_cream}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.glossy}
        />
        <MasonryImage
          setHoveredIndex={setHoveredIndex}
          hoveredIndex={hoveredIndex}
          image={bakingImages.crookies}
        />
      </div>
    </div>
  );
}
