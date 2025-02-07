import { motion } from "framer-motion";
import { euImages, otherTravel } from "../../assets";
import { HiOutlineCursorArrowRays } from "react-icons/hi2";

import "./Travel.scss";

export default function Travel() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <div className="wrapper flex flex-col justify-self-center gap-4">
      <motion.div
        className="flex flex-row gap-4 justify-center"
        initial={{ transform: "translateY(-2px)" }}
        animate={{ transform: "translateY(2px)" }}
        transition={{
          repeat: Infinity,
          yoyo: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.london.src}
          alt={euImages.london.alt}
          title={euImages.london.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />
        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={otherTravel.puntaCana.src}
          alt={otherTravel.puntaCana.alt}
          title={otherTravel.puntaCana.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />
        <HiOutlineCursorArrowRays className="cursor" />
      </motion.div>
      <motion.div
        className="flex flex-row gap-6"
        initial={{ transform: "translateY(-4px)" }}
        animate={{ transform: "translateY(5px)" }}
        transition={{
          repeat: Infinity,
          yoyo: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.croissant.src}
          alt={euImages.croissant.alt}
          title={euImages.croissant.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />
        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.lisbon.src}
          alt={euImages.lisbon.alt}
          title={euImages.lisbon.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />

        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.portugal.src}
          alt={euImages.portugal.alt}
          title={euImages.portugal.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />
      </motion.div>
      <motion.div
        className="flex flex-row gap-4 justify-center"
        initial={{ transform: "translateY(-2px)" }}
        animate={{ transform: "translateY(2px)" }}
        transition={{
          repeat: Infinity,
          yoyo: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.eiffel.src}
          alt={euImages.eiffel.alt}
          title={euImages.eiffel.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />

        <motion.img
          drag
          width={250}
          className="rounded-full drop-shadow-sm"
          src={euImages.venice.src}
          alt={euImages.venice.alt}
          title={euImages.venice.alt}
          variants={variants}
          initial="hidden"
          animate="show"
        />
      </motion.div>
    </div>
  );
}
