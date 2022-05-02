import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import StyleFooter from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={StyleFooter.footer_section}>
      <Container>
        <div className={StyleFooter.inner_footer_section}>
          <div className={StyleFooter.logo_section}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className={StyleFooter.logo_container}>
                <h1 className={StyleFooter.logo}>Stock Dress</h1>
                <div className={StyleFooter.logo_divider}>
                  <div className={StyleFooter.divider_left}></div>
                  <div className={StyleFooter.divider_right}></div>
                </div>
                <p className={StyleFooter.sub_logo}>Unlimited Dresses</p>
              </div>
            </Link>

            <div
              className={StyleFooter.logo_text}
              style={{ color: "#e5e5e5ca" }}
            >
              Transgo shipping offers a host of logistic management services and
              supply chain & provide innovative solutions with the best.
            </div>
          </div>
          <div className={StyleFooter.useful_link_section}>
            <h3 className={StyleFooter.footer_header}>Useful Links</h3>
            <p className={StyleFooter.useful_link}>HOME</p>
            <p className={StyleFooter.useful_link}>ABOUT US</p>
            <p className={StyleFooter.useful_link}>SERVICE</p>
            <p className={StyleFooter.useful_link}>BLOG</p>
            <p className={StyleFooter.useful_link}>CONTACT</p>
          </div>
          <div className={StyleFooter.contact_us}>
            <h3 className={StyleFooter.footer_header}>Contact us</h3>

            <p className={StyleFooter.useful_link}>
              143 castle road 517 district, kiyev port south Canada
            </p>
            <p className={StyleFooter.useful_link}>+00 12 123 4567</p>
            <p className={StyleFooter.useful_link}>Info@yourmail.com</p>
          </div>
          <div className={StyleFooter.copyrights_container}></div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
