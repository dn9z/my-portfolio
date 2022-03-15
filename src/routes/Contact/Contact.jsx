import React from "react";
import "./Contact.scss";
import { motion, useAnimation } from "framer-motion";

const Contact = () => {
  const control = useAnimation();

  const charAnim1 = () => {
    control.start({
      scaleY: [0.8, 0.5, 0.3],
      transition: {
        duration: 1,
      },
    });
  };

  const charAnim2 = () => {
    control.start({
      scaleY: [1, 1.2, 1],
    });
  };

  const charVariants = {
    squeeze: {},
    loosen: {},
  };

  return (
    // seems only to work with <p>
    <>
      <div className="contact-main">
        <div className="title">
          <motion.p
            onMouseOver={charAnim1}
            onMouseLeave={charAnim2}
            animate={control}
          >
            C
          </motion.p>
          <motion.p
            onMouseOver={charAnim1}
            onMouseOut={charAnim2}
            animate={control}
          >
            o
          </motion.p>
          <motion.p>n</motion.p>
          <motion.p>t</motion.p>
          <motion.p>a</motion.p>
          <motion.p>c</motion.p>
          <motion.p>t</motion.p>
          <span></span>
          <motion.p>m</motion.p>
          <motion.p>e</motion.p>
        </div>
      </div>
    </>
  );
};

export default Contact;
