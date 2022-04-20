import React from "react";
import "./Work.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const workArray = [
  {
    name: "Lorem ipsum",
    pictureLink:
      "https://songline-marketing.de/wp-content/uploads/2021/08/image-placeholder.jpg",
  },
  {
    name: "Lorem ipsum2",
    pictureLink:
      "https://songline-marketing.de/wp-content/uploads/2021/08/image-placeholder.jpg",
  },
  {
    name: "Lorem ipsum3",
    pictureLink:
      "https://songline-marketing.de/wp-content/uploads/2021/08/image-placeholder.jpg",
  },
];

const Work = () => {
  const galleryVariants = {
    hidden: {
      opacity:0,
      transform: "matrix3d(1,0,0.00,0,0.00,0.02,1.00,-0.002,0,-1,0.02,0,0,0,0,1)",
      // y: 0,
    },
    show: (i) => {
      return {
        opacity:[0,1,1,1],
        transform: "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",
        // y: i === 0 ? "15rem" : i === 1 ? "10rem" : i === 2 && 0,
      };
    },
  };

  return (
    <>
      <TitleAnim titleString={"My Work"} className="work-title" />
      <motion.div
        className="gallery"
        initial="hidden"
        animate="show"
        transition={{ delayChildren: 5.9, staggerChildren: 0.5 }}
      >
        {workArray.map((ele, i) => {
          return (
            <motion.div
              key={i}
              className="card-container"
              variants={galleryVariants}
              custom={i}
            >
              <Tilt
                className="tilt-container"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                // glareBorderRadius="0.5rem"
                scale={1.02}
                gyroscope={true}

              >
                <img src={ele.pictureLink} alt="" />
                <div className="layer-3d">
                  <h1>{ele.name}</h1>
                </div>
              </Tilt>
              {/* <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi modi corrupti ullam explicabo quo quasi tempora adipisci autem, numquam officiis iusto quaerat consequuntur expedita. Non, ab deleniti. Reiciendis, praesentium.</p>
              </div> */}
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Work;
