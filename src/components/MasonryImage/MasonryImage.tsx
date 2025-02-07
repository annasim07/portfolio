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
  const isHovered = hoveredIndex === image.index;

  const imgAnimation = {
    filter: isHovered ? "blur(3px)" : "blur(0px)",
    opacity: 1,
  };

  const overlayAnimation = {
    opacity: isHovered ? 1 : 0,
  };

  return (
    <div
      className="relative block h-auto max-w-full"
      onMouseEnter={() => setHoveredIndex(image.index ?? null)}
      onMouseDown={() => setHoveredIndex(image.index ?? null)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.img
        className="rounded-lg w-full h-full object-cover"
        src={image.src}
        alt={image.alt}
        initial={{ opacity: 0 }}
        animate={imgAnimation}
        transition={{ ease: "easeIn", duration: 1 }}
      />
      {isHovered && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-slate-400/50 text-white rounded-lg"
          animate={overlayAnimation}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <span className="text-center drop-shadow-sm px-4">{image.alt}</span>
        </motion.div>
      )}
    </div>
  );
};
