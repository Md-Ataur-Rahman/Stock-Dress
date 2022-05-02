import React from "react";
import { Container } from "react-bootstrap";
import BannerStyle from "./Banner.module.css";
import "../Style/style.css";
const Banner = () => {
  return (
    <>
      <section className={BannerStyle.banner_section}>Banner</section>
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
