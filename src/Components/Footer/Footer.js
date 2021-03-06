import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import StyleFooter from "./Footer.module.css";
import { RiRoadMapLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section className={StyleFooter.footer_section}>
      <Container>
        <div
          className={StyleFooter.inner_footer_section}
          style={{ paddingTop: "1.5rem" }}
        >
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
              We have unlimited products in our stock. You can buy them our
              greatest dress in our stock.
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
              <span>
                <RiRoadMapLine className="me-2" />
                Bangladesh
              </span>
            </p>
            <p className={StyleFooter.useful_link}>
              <span>
                <BsTelephone className="me-2" />
                +12 123 4567
              </span>
            </p>
            <p className={StyleFooter.useful_link}>
              <span>
                <HiOutlineMail className="me-2" />
                Info@mail.com
              </span>
            </p>
          </div>
          <div className={StyleFooter.copyrights_container}></div>
        </div>
        <div className={StyleFooter.copyrights_text}>
          <p>&copy; Copyrights {year} Stock Dress. All rights reserved.</p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
