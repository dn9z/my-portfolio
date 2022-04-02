import React from "react";
import SubTitleAnim from "../../components/anim/SubTitleAnim/SubTitleAnim";
import TitleAnim from "../../components/anim/TitleAnim/TitleAnim";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home-main">
      <TitleAnim
        titleString="Welcome"
        className="home-title"
        
      />
      <SubTitleAnim subTitleString="My name is Deniz Ilyasoglu, I'm a creative front-end designer, backend developer and sports enthusiast"/>
      </div>
    
  );
};

export default Home;
