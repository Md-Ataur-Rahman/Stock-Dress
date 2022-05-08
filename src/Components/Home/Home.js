import React from "react";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import FrequentQuestion from "../FrequentQuestion/FrequentQuestion";
import InventoryItems from "../InventoryItems/InventoryItems";
import OurServices from "../OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <InventoryItems />
      <OurServices />
      <FrequentQuestion />
      <ContactUs />
    </div>
  );
};

export default Home;
