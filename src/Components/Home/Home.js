import React from "react";
import Banner from "../Banner/Banner";
import FrequentQuestion from "../FrequentQuestion/FrequentQuestion";
import InventoryItems from "../InventoryItems/InventoryItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <FrequentQuestion />
    </div>
  );
};

export default Home;
