import "./Contact.scss";
import { useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

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
  const [isHovering,setIsHovering] = useState(false)


  // const refC = useRef();

  const [node_c1,node_o,node_n,node_t1,node_a,node_c2,node_t2,node_m,node_e] = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]



  
  console.log(node_c1)
  try {
    console.log(node_c1.current.style.transform.slice(7, 10));
  } catch (error) {}


  const [tension, setTension] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const generateTension = (tensionRaw) => {
    // console.log("tensionRaw: " + tensionRaw);
    if (tensionRaw <= 0.3) return 4;
    if (tensionRaw <= 0.5) return 2;
    if (tensionRaw <= 0.7) return 1.6;
    if (tensionRaw <= 0.9) return 1.2;
    if (tensionRaw <= 1) return 1.1;
  };

  const updateTensionArrayHandler = (tensionUpdate, e) => {
    const arrCopy = [...tension];
    // console.log(e.target.id)
    arrCopy[e.target.id] = tensionUpdate;
    setTension(arrCopy);
  };

  const charVariants = {
    squeeze: {
      scaleY: [0.9, 0.7, 0.4, 0.35, 0.3],
      transition: {
        duration: 2,
      },
    },
    loosen: (index) => {
      return {
        scaleY: [1, generateTension(tension[index]), 1],
        transition: {
          type: "spring",
          damping: 500,
          mass: 1,
          // stiffness: 100,
        },
      };
    },
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
              // console.log(e.target.style.transform.slice(7, 10))
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_c1.start("loosen");
            }}
            animate={controls_c1}
            variants={charVariants}
            custom={0}
            id={0}
            ref={node_c1}
          >
            C
          </motion.p>
          <motion.p
            onMouseOver={() => controls_o.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_o.start("loosen");
            }}
            animate={controls_o}
            variants={charVariants}
            custom={1}
            id={1}
          >
            o
          </motion.p>
          <motion.p
            onMouseOver={() => controls_n.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_n.start("loosen");
            }}
            animate={controls_n}
            variants={charVariants}
            custom={2}
            id={2}
          >
            n
          </motion.p>
          <motion.p
            onMouseOver={() => controls_t1.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_t1.start("loosen");
            }}
            animate={controls_t1}
            variants={charVariants}
            custom={3}
            id={3}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls_a.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_a.start("loosen");
            }}
            animate={controls_a}
            variants={charVariants}
            custom={4}
            id={4}
          >
            a
          </motion.p>
          <motion.p
            onMouseOver={() => controls_c2.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_c2.start("loosen");
            }}
            animate={controls_c2}
            variants={charVariants}
            custom={5}
            id={5}
          >
            c
          </motion.p>
          <motion.p
            onMouseOver={() => controls_t2.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_t2.start("loosen");
            }}
            animate={controls_t2}
            variants={charVariants}
            custom={6}
            id={6}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => controls_m.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_m.start("loosen");
            }}
            animate={controls_m}
            variants={charVariants}
            custom={7}
            id={7}
          >
            m
          </motion.p>
          <motion.p
            onMouseOver={() => controls_e.start("squeeze")}
            onMouseLeave={(e) => {
              updateTensionArrayHandler(
                e.target.style.transform.slice(7, 10),
                e
              );
              controls_e.start("loosen");
            }}
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
