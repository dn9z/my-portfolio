import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const CharacterAnim = ({ char, i }) => {
  const control = useAnimation();
  const motionValue = useMotionValue(1);

  const charVariants = {
    squeeze: {
      scaleY: [0.9, 0.85, 0.8, 0.75, 0.5, 0.4, 0.35, 0.3],
      transition: {
        duration: 3,
        repeatDelay: 0.5,
      },
    },
    loosen: (index) => {
      // console.log(motionValues[index].get())
      return {
        scaleY: [
          1,
          processTension(motionValue.get()),
          1,
          processTension(motionValue.get()) / 2,
          1,
          1.1,
          1,
        ],
        transition: {
          // type: "spring",
          duration: 1.6,
          damping: 20,
          mass: 0.1,
          stiffness: 50,
          repeatDelay: 0.5,
        },
      };
    },
  };

  const processTension = (tensionRaw) => {
    console.log("tensionRaw: " + tensionRaw);
    if (tensionRaw <= 0.3) return 4;
    if (tensionRaw <= 0.5) return 2;
    if (tensionRaw <= 0.7) return 1.6;
    if (tensionRaw <= 0.9) return 1.2;
    if (tensionRaw <= 1) return 1.1;
  };

  return (
    <motion.span
      className="title-char"
      onMouseOver={() => control.start("squeeze")}
      onMouseLeave={() => control.start("loosen")}
      style={{ scaleY: motionValue }}
      animate={control}
      custom={i} // this gets passed to the index in the variants
      variants={charVariants}
    >
      {char}
    </motion.span>
  );
};

export default CharacterAnim;
