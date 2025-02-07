import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import with_kobe from "../../assets/with_kobe.jpeg";
import hi_badge_blue from "../../assets/hi_blue.png";

import "./Home.scss";
import "../Common.scss";

export default function Home() {
  return (
    <div className="container">
      <div className="absolute object-cover background-image" />
      <div className="relative flex justify-center content">
        <Image
          src={with_kobe}
          alt="picture with my dog, Kobe"
          className="static my-picture"
        />
        <div className="relative top-18">
          <div className="flex align-baseline">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 345, x: -90 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              width={215}
              className="z-100"
              src={hi_badge_blue}
              alt="My dog and me"
            />
            <motion.h1
              className="absolute text-5xl font-bold right-0"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 175 }}
              transition={{
                duration: 0.4,
                type: "linear",
              }}
            >
              I'm Anna!
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{
              duration: 0.4,
              type: "linear",
            }}
          >
            Click through the pages to see a slices of my life
          </motion.div>
        </div>
      </div>
    </div>
  );
}
