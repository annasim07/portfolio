import { useState } from "react";
import { ImageObject } from "../types";
import { Button, Image } from "@heroui/react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi2";
import clsx from "clsx";

import "./ImageCarousel.scss";

export default function ImageCarousel({
  images,
}: {
  images: Array<ImageObject>;
}) {
  const [currIndex, setCurrIndex] = useState(0);
  const { alt, src } = images[currIndex];

  return (
    <div className={clsx("image-carousel")}>
      <Image
        alt={alt}
        src={src}
        height={500}
        width={500}
        className="active-image"
      />
      <div className="carousel-control">
        <Button
          isIconOnly
          className={clsx("control-buttons", "control-buttons--left")}
          onPress={() => {
            const prevIndex = (currIndex - 1 + images.length) % images.length;
            setCurrIndex(prevIndex);
          }}
          variant="flat"
          radius="full"
        >
          <HiChevronLeft />
        </Button>
        <div className="carousel-indicatorGroup">
          {images.map(({ alt, src }, index) => (
            <Button
              isIconOnly
              aria-label={`Navigate to ${alt}`}
              key={src}
              onPress={() => setCurrIndex(index)}
            >
              <HiStar
                className={clsx(
                  "carousel-indicator",
                  index === currIndex && "carousel-indicator--active"
                )}
              />
            </Button>
          ))}
        </div>
        <Button
          isIconOnly
          className={clsx("control-buttons", "control-buttons--right")}
          onPress={() => {
            const nextIndex = (currIndex + 1 + images.length) % images.length;
            setCurrIndex(nextIndex);
          }}
          color="primary"
          variant="flat"
          radius="full"
        >
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}
