import React from "react";
import { Container } from "react-bootstrap";
import BannerStyle from "./Banner.module.css";
import "../Style/style.css";
const Banner = () => {
  return (
    <>
      <section className={BannerStyle.banner_section}>
        <Container>
          <div className={BannerStyle.inner_banner_section}>
            <h1>
              Best Products Sell Now <br /> Dress Store
            </h1>
            <p>
              Our productivities are best. We have million of clothes in our
              store, Now We are selling this dress. Our Communities so widely
              big. Now Are you buying it?
            </p>
            <button className="primary_btn">READ MORE</button>
          </div>
        </Container>
      </section>
      <section className={BannerStyle.banner_contactus_section}>
        <Container>
          <div className={BannerStyle.inner_banner_contactus_section}>
            <p>REACH YOUR DESTINATION 100% SAFE & SECURE</p>
            <button className="secondary_btn">Contact Us</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
