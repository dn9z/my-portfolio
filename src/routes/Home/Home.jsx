import React from "react";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import "./Home.scss";
const Home = () => {
  return (
    
      <TitleAnim
        titleString="Welcome"
        className="home-title"
        subTitleString="My name is Deniz Ilyasoglu, I'm a creative front-end designer, backend developer and sports enthusiast"
      />
    
  );
};

export default Home;
