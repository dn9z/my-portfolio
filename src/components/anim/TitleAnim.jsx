import React from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import "./TitleAnim.scss";

const TitleAnim = ({ titleString }) => {
  const controls = new Array(9);

  controls[0] = useAnimation();
  controls[1] = useAnimation();
  controls[2] = useAnimation();
  controls[3] = useAnimation();
  controls[4] = useAnimation();
  controls[5] = useAnimation();
  controls[6] = useAnimation();
  controls[7] = useAnimation();
  controls[8] = useAnimation();

  // const scale_c1 = useMotionValue(1)

  const motionValues = new Array(9);

  motionValues[0] = useMotionValue(1);
  motionValues[1] = useMotionValue(1);
  motionValues[2] = useMotionValue(1);
  motionValues[3] = useMotionValue(1);
  motionValues[4] = useMotionValue(1);
  motionValues[5] = useMotionValue(1);
  motionValues[6] = useMotionValue(1);
  motionValues[7] = useMotionValue(1);
  motionValues[8] = useMotionValue(1);
  // const motionValues = new Array(9).fill(useMotionValue(1))

  const processTension = (tensionRaw) => {
    console.log("tensionRaw: " + tensionRaw);
    if (tensionRaw <= 0.3) return 4;
    if (tensionRaw <= 0.5) return 2;
    if (tensionRaw <= 0.7) return 1.6;
    if (tensionRaw <= 0.9) return 1.2;
    if (tensionRaw <= 1) return 1.1;
  };

  const charVariants = {
    squeeze: {
      scaleY: [0.9, 0.85, 0.8, 0.75, 0.5, 0.4, 0.35, 0.3],
      transition: {
        duration: 3,
        repeatDelay: 0.1,
      },
    },
    loosen: (index) => {
      // console.log(motionValues[index].get())
      return {
        scaleY: [
          1,
          processTension(motionValues[index].get()),
          1,
          processTension(motionValues[index].get()) / 2,
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
        },
      };
    },
  };

  return (
    <>
      <div className="title">
        {titleString.split("").map((ele, i) => {
          // console.log(ele)
          return (
            <motion.p
              key={i}
              onMouseOver={() => controls[i].start("squeeze")}
              onMouseLeave={() => controls[i].start("loosen")}
              style={{ scaleY: motionValues[i] }}
              animate={controls[i]}
              custom={i} // this gets passed to the index in the variants
              variants={charVariants}
            >
              {ele}
            </motion.p>
          );
        })}
      </div>
    </>
  );
};

export default TitleAnim;
