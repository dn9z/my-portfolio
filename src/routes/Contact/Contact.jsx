import { useState, useEffect, useRef } from "react";
import "./Contact.scss";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

// false

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



  const [tension, setTension] = useState([1,1,1,1,1,1,1,1]);

  const generateTension = (tensionRaw) => {
    console.log("tensionRaw: " + tensionRaw);
    if (tensionRaw > 0.4) {
      return 1.2;
    }
    return 3;
  };



  const charVariants = {
    squeeze: {
      scaleY: [0.8, 0.5, 0.3],
      transition: {
        duration: 1,
      },
    },
    loosen: (target)=>({ scaleY: [1, generateTension(tension[target]), 1] }),
    initial: { transform: 0 },
  };

  // console.log(tension.current)
  return (
    // seems only to work with <p>
    <>
      <div className="contact-main">
        <div className="title">
            <motion.p
              onMouseOver={() => controls_c1.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_c1.start("loosen");
              }}
              animate={controls_c1}
              variants={charVariants}
              custom={'c1'}
            >
              C
            </motion.p>
            <motion.p
              onMouseOver={() => controls_o.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_o.start("loosen");
              }}
              animate={controls_o}
              variants={charVariants}
            >
              o
            </motion.p>
            <motion.p
              onMouseOver={() => controls_n.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_n.start("loosen");
              }}
              animate={controls_n}
              variants={charVariants}
            >
              n
            </motion.p>
            <motion.p
              onMouseOver={() => controls_t1.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_t1.start("loosen");
              }}
              animate={controls_t1}
              variants={charVariants}
            >
              t
            </motion.p>
            <motion.p
              onMouseOver={() => controls_a.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_a.start("loosen");
              }}
              animate={controls_a}
              variants={charVariants}
            >
              a
            </motion.p>
            <motion.p
              onMouseOver={() => controls_c2.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_c2.start("loosen");
              }}
              animate={controls_c2}
              variants={charVariants}
            >
              c
            </motion.p>
            <motion.p
              onMouseOver={() => controls_t2.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_t2.start("loosen");
              }}
              animate={controls_t2}
              variants={charVariants}
            >
              t
            </motion.p>
            <motion.p
              onMouseOver={() => controls_m.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_m.start("loosen");
              }}
              animate={controls_m}
              variants={charVariants}
            >
              m
            </motion.p>
            <motion.p
              onMouseOver={() => controls_e.start("squeeze")}
              onMouseLeave={(e) => {
                setTension(e.target.style.transform.slice(7, 10));
                controls_e.start("loosen");
              }}
              animate={controls_e}
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
