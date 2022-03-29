import React from "react";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import "./Home.scss";
const Home = () => {
  return (
    
      <TitleAnim
        titleString="Welcome"
        className="home-title"
        subTitleString="My name isDeniz Ilyasoglu, I am a creative front-end designer, a backend developer and sports enthusiast"
      />
    
  );
};

export default Home;
