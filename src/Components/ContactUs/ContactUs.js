import React from "react";
import { Container } from "react-bootstrap";
import StyleContactUs from "./ContactUs.module.css";
import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiRoadMapLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className={StyleContactUs.contactus_section}>
      <Container>
        <h2 className="section_header">Contact Us</h2>
        <div className={StyleContactUs.inner_contactus_section}>
          <div className={StyleContactUs.contactus_text}>
            <h3>Contact Information</h3>
            <p>
              <span>
                <BsTelephone className="me-2" />
                +12 123 4567
              </span>
            </p>
            <p>
              <span>
                <HiOutlineMail className="me-2" />
                Info@mail.com
              </span>
            </p>
            <p>
              <span>
                <RiRoadMapLine className="me-2" />
                Bangladesh
              </span>
            </p>
            <div className={StyleContactUs.contactus_social}>
              <p>
                <AiFillGoogleCircle />
              </p>
              <p>
                <AiFillGithub />
              </p>
              <p>
                <AiFillLinkedin />
              </p>
              <p>
                <AiFillFacebook />
              </p>
            </div>
          </div>
          <div className={StyleContactUs.contactus_from}>
            <form>
              <input type="text" name="Name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea
                name="comment"
                placeholder="Comment now"
                cols="30"
                rows="10"
              ></textarea>
              <button className="button">Send Now</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
