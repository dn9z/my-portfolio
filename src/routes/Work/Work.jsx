import React from "react";
import "./Work.scss";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const workArray = [
  {
    name: "Lorem ipsum",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Lorem ipsum2",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
  {
    name: "Lorem ipsum3",
    pictureLink:
      "https://www.schulz-grafik.de/wp-content/uploads/2018/03/placeholder.png",
  },
];

const Work = () => {
  const galleryVariants = {
    hidden: {
      x: "100vw",
    },
    show: (i) => {
      return{
        x: i===0?0:i===1?'20vw':i===2&&'40vw'
      }
    }
  };

  return (
    <div className="component-container">
      <TitleAnim titleString={"My Work"} className="work-title" />
      <motion.div
        className="gallery"
        initial="hidden"
        animate="show"
        transition={{delayChildren:6.6, staggerChildren: 0.5 }}
      >
        {workArray.map((ele, i) => {
          return (
            <motion.div className="card-container" variants={galleryVariants} custom={i}>
              <Tilt
                className="tilt-container"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                glareBorderRadius="0.5rem"
                scale={1.02}
              >
                <img src={ele.pictureLink} alt="" />
                <div className="layer-3d">
                  <h1>{ele.name}</h1>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Work;
