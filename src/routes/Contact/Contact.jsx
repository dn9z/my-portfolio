import "./Contact.scss";
import { useState, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const Contact = () => {
  const controls_c1 = useAnimation();
  const controls_o = useAnimation();
  const controls_n = useAnimation();
  const controls_t1 = useAnimation();
  const controls_a = useAnimation();
  const controls_c2 = useAnimation();
  const controls_t2 = useAnimation();
  const controls_m = useAnimation();
  const controls_e = useAnimation();


  // const scale_c1 = useMotionValue(1)

  // const motionValues = useRef(new Array(9).fill(useMotionValue(1)))
const motionValues = new Array(9)

motionValues[0] = useMotionValue(1)
motionValues[1] = useMotionValue(1)
motionValues[2] = useMotionValue(1)
motionValues[3] = useMotionValue(1)
motionValues[4] = useMotionValue(1)
motionValues[5] = useMotionValue(1)
motionValues[6] = useMotionValue(1)
motionValues[7] = useMotionValue(1)
motionValues[8] = useMotionValue(1)


  const generateTension = (tensionRaw) => {
    console.log("tensionRaw: " + tensionRaw);
    if (tensionRaw <= 0.3) return 4;
    if (tensionRaw <= 0.5) return 2;
    if (tensionRaw <= 0.7) return 1.6;
    if (tensionRaw <= 0.9) return 1.2;
    if (tensionRaw <= 1) return 1.1;
  };


  const charVariants = {
    squeeze: {
      scaleY: [0.9, 0.7, 0.4, 0.35, 0.3],
      transition: {
        duration: 2,
      },
    },
    loosen: (index) => {
      // console.log(motionValues[index].get())
      return {
        scaleY: [1, generateTension(motionValues[index].get()), 1],
        transition: {
          type: "spring",
          damping: 500,
          mass: 1,
          // stiffness: 100,
        },
      };
    }
  };

  console.log('rendered')
  return (
    // seems only to work with <p>
    <>
      <div className="contact-main">
        <div className="title">
          <motion.p
            onMouseOver={() => controls_c1.start("squeeze")}
            onMouseLeave={() =>controls_c1.start("loosen")}
            style={{scaleY:motionValues[0]}}
            animate={controls_c1}
            variants={charVariants}
            custom={0}
            id={0}
          >
            C
          </motion.p>
          <motion.p
            onMouseOver={() => controls_o.start("squeeze")}
            onMouseLeave={() => controls_o.start("loosen")}
            style={{scaleY:motionValues[1]}}
            animate={controls_o}
            variants={charVariants}
            custom={1}
            id={1}
          >
            o
          </motion.p>
          <motion.p
            onMouseOver={() => controls_n.start("squeeze")}
            onMouseLeave={(e) => controls_n.start("loosen")}
            style={{scaleY:motionValues[2]}}
            animate={controls_n}
            variants={charVariants}
            custom={2}
            id={2}
          >
            n
          </motion.p>
          <motion.p
            onMouseOver={() => controls_t1.start("squeeze")}
            onMouseLeave={(e) =>controls_t1.start("loosen")}
            style={{scaleY:motionValues[3]}}
            animate={controls_t1}
            variants={charVariants}
            custom={3}
            id={3}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls_a.start("squeeze")}
            onMouseLeave={(e) =>controls_a.start("loosen")}
            style={{scaleY:motionValues[4]}}
            animate={controls_a}
            variants={charVariants}
            custom={4}
            id={4}
          >
            a
          </motion.p>
          <motion.p
            onMouseOver={() => controls_c2.start("squeeze")}
            onMouseLeave={(e) => controls_c2.start("loosen")}
            style={{scaleY:motionValues[5]}}
            animate={controls_c2}
            variants={charVariants}
            custom={5}
            id={5}
          >
            c
          </motion.p>
          <motion.p
            onMouseOver={() => controls_t2.start("squeeze")}
            onMouseLeave={(e) =>  controls_t2.start("loosen")}
            style={{scaleY:motionValues[6]}}
            animate={controls_t2}
            variants={charVariants}
            custom={6}
            id={6}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls_m.start("squeeze")}
            onMouseLeave={(e) => controls_m.start("loosen")}
            style={{scaleY:motionValues[7]}}
            animate={controls_m}
            variants={charVariants}
            custom={7}
            id={7}
          >
            m
          </motion.p>
          <motion.p
            onMouseOver={() => controls_e.start("squeeze")}
            onMouseLeave={(e) =>  controls_e.start("loosen")}
            style={{scaleY:motionValues[8]}}
            animate={controls_e}
            variants={charVariants}
            custom={8}
            id={8}
          >
            e
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Contact;

// function getTranslateY(myElement) {
//   var style = window.getComputedStyle(myElement);
//   var matrix = new DOMMatrix(style.transform);
//   return matrix.d
// }
