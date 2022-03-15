import { useState } from "react";
import "./Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {

  const [isHovered_c1, setIsHovered_c1] = useState(false);
  const [isHovered_o, setIsHovered_o] = useState(false);
  const [isHovered_n, setIsHovered_n] = useState(false);
  const [isHovered_t1, setIsHovered_t1] = useState(false);
  const [isHovered_a, setIsHovered_a] = useState(false);
  const [isHovered_c2, setIsHovered_c2] = useState(false);
  const [isHovered_t2, setIsHovered_t2] = useState(false);
  const [isHovered_m, setIsHovered_m] = useState(false);
  const [isHovered_e, setIsHovered_e] = useState(false);

 

  const charVariants = {
    squeeze: {
      scaleY: [0.8, 0.5, 0.3],
      // originY:0.5,
      transition: {
        duration: 1,
      },
    },
    loosen: { scaleY: [1, 1.2, 1] },
  };

  return (
    // seems only to work with <p>
    <>
      <div className="contact-main">
        <div className="title">
          <motion.p
            onMouseOver={() => setIsHovered_c1(true)}
            onMouseLeave={() => setIsHovered_c1(false)}
            animate={isHovered_c1 ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            C
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_o(true)}
            onMouseLeave={() => setIsHovered_o(false)}
            animate={isHovered_o ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            o
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_n(true)}
            onMouseLeave={() => setIsHovered_n(false)}
            animate={isHovered_n ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            n
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_t1(true)}
            onMouseLeave={() => setIsHovered_t1(false)}
            animate={isHovered_t1 ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_a(true)}
            onMouseLeave={() => setIsHovered_a(false)}
            animate={isHovered_a ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            a
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_c2(true)}
            onMouseLeave={() => setIsHovered_c2(false)}
            animate={isHovered_c2 ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            c
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_t2(true)}
            onMouseLeave={() => setIsHovered_t2(false)}
            animate={isHovered_t2 ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            t
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_m(true)}
            onMouseLeave={() => setIsHovered_m(false)}
            animate={isHovered_m ? "squeeze" : "loosen"}
            variants={charVariants}
          >
            m
          </motion.p>
          <motion.p
            onMouseOver={() => setIsHovered_e(true)}
            onMouseLeave={() => setIsHovered_e(false)}
            animate={isHovered_e ? "squeeze" : "loosen"}
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
