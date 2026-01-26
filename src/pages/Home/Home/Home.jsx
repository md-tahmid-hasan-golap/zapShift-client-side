import React from "react";
import Banner from "../Banner/Banner";
import HowWork from "../HowWork/HowWork";
import OurService from "../OurService/OurService";
import BrandNew from "../BrandNew/BrandNew";
import ParcelTraking from "../ParcelTraking/ParcelTraking";
import Customar from "../Customar/Customar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowWork></HowWork>
      <OurService></OurService>
      <BrandNew></BrandNew>
      <ParcelTraking></ParcelTraking>
      <Customar></Customar>
    </div>
  );
};

export default Home;
