import "./Contact.scss";
import { useState, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react/cjs/react.production.min";

const Contact = () => {
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

//  controls.forEach((ele)=>{
//    ele = useAnimation()
//  })

  // useEffect(()=>{
  //   for (let i = 0; i < controls.length; i++) {
  //     controls[i] = useAnimation()
  //   }
  // },[])


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

  console.log("rendered");
  return (
    // seems only to work with <p>
    <>
      <div className="contact-main">
        <div className="title">
          <motion.p
            onMouseOver={() => controls[0].start("squeeze")}
            onMouseLeave={() => controls[0].start("loosen")}
            style={{ scaleY: motionValues[0] }}
            animate={controls[0]}
            custom={0} // this gets passed to the index in the variants 
            variants={charVariants}
          >
            C
          </motion.p>
          <motion.p
            onMouseOver={() => controls[1].start("squeeze")}
            onMouseLeave={() => controls[1].start("loosen")}
            style={{ scaleY: motionValues[1] }}
            animate={controls[1]}
            custom={1}
            variants={charVariants}
          >
            o
          </motion.p>
          <motion.p
            onMouseOver={() => controls[2].start("squeeze")}
            onMouseLeave={() => controls[2].start("loosen")}
            style={{ scaleY: motionValues[2] }}
            animate={controls[2]}
            custom={2}
            variants={charVariants}
          >
            n
          </motion.p>
          <motion.p
            onMouseOver={() => controls[3].start("squeeze")}
            onMouseLeave={() => controls[3].start("loosen")}
            style={{ scaleY: motionValues[3] }}
            animate={controls[3]}
            custom={3}
            variants={charVariants}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls[4].start("squeeze")}
            onMouseLeave={() => controls[4].start("loosen")}
            style={{ scaleY: motionValues[4] }}
            animate={controls[4]}
            custom={4}
            variants={charVariants}
          >
            a
          </motion.p>
          <motion.p
            onMouseOver={() => controls[5].start("squeeze")}
            onMouseLeave={() => controls[5].start("loosen")}
            style={{ scaleY: motionValues[5] }}
            animate={controls[5]}
            custom={5}
            variants={charVariants}
          >
            c
          </motion.p>
          <motion.p
            onMouseOver={() => controls[6].start("squeeze")}
            onMouseLeave={() => controls[6].start("loosen")}
            style={{ scaleY: motionValues[6] }}
            animate={controls[6]}
            custom={6}
            variants={charVariants}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls[7].start("squeeze")}
            onMouseLeave={() => controls[7].start("loosen")}
            style={{ scaleY: motionValues[7] }}
            animate={controls[7]}
            custom={7}
            variants={charVariants}
          >
            m
          </motion.p>
          <motion.p
            onMouseOver={() => controls[8].start("squeeze")}
            onMouseLeave={() => controls[8].start("loosen")}
            style={{ scaleY: motionValues[8] }}
            animate={controls[8]}
            custom={8}
            variants={charVariants}
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
