import { ImageObject } from "../../types";
import { motion } from "framer-motion";

export const MasonryImage = ({
  hoveredIndex,
  setHoveredIndex,
  image,
}: {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  image: ImageObject;
}) => {
  const itemIsHovered = (index: number) => hoveredIndex === index;

  const divTransition = { ease: "easeInOut", duration: 0.5 };
  return (
    <div
      className="relative block h-auto max-w-full"
      onMouseEnter={() => setHoveredIndex(image.index!)}
      onMouseDown={() => setHoveredIndex(image.index!)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.img
        className="rounded-lg w-full"
        src={image.src}
        alt={image.alt}
        animate={{
          filter: itemIsHovered(image.index!) ? "blur(3px)" : "blur(0px)",
        }}
      />
      <motion.div
        className="absolute flex items-center justify-center align-center bg-slate-400/50 text-white rounded-lg"
        animate={{
          opacity: itemIsHovered(image.index!) ? 1 : 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        transition={divTransition}
      >
        <span className="text-center drop-shadow-sm px-4">{image.alt}</span>
      </motion.div>
    </div>
  );
};
