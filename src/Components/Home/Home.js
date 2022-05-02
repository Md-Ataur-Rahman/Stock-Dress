import React from "react";
import Banner from "../Banner/Banner";
import FrequentQuestion from "../FrequentQuestion/FrequentQuestion";
import InventoryItems from "../InventoryItems/InventoryItems";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <OurServices />
      {/*
      <FrequentQuestion />
       */}
    </div>
  );
};

export default Home;
