import React from "react";
import StyelOurServices from "./OurServices.module.css";
import { Container } from "react-bootstrap";
import "../Style/style.css";
import { GiEarthAsiaOceania } from "react-icons/gi";
import { MdAirplaneTicket } from "react-icons/md";
import { FaRoad, FaWarehouse } from "react-icons/fa";
import { BiStore, BiPackage } from "react-icons/bi";

const OurServices = () => {
  return (
    <div style={{ width: "100%" }}>
      <Container>
        <h1 className="section_header">Our Services</h1>
        <div className={StyelOurServices.service_container}>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <MdAirplaneTicket />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>AIR FREIGHT</h3>
              <p>
                SECURE AND SAFE AIR Freight We offers a host of management
                services and supply chain solutions....
              </p>
            </div>
          </div>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <FaRoad />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>ROAD FREIGHT</h3>
              <p>
                SECURE AND SAFE ROAD Freight We offers a host of management
                services and supply chain solutions....
              </p>
            </div>
          </div>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <GiEarthAsiaOceania />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>OCEAN FREIGHT</h3>
              <p>
                SECURE AND SAFE OCEAN Freight We offers a host of management
                services and supply chain solutions....
              </p>
            </div>
          </div>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <FaWarehouse />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>WARE HOUSE</h3>
              <p>
                We Have ware house for stock dress in the house. That's probably
                great soultion.
              </p>
            </div>
          </div>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <BiStore />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>STORAGE</h3>
              <p>
                SECURE AND SAFE Secure Freight . Our Storage Huge for stock
                dresses. And That's why we have lots of dresses.
              </p>
            </div>
          </div>
          <div className={StyelOurServices.service}>
            <div className={StyelOurServices.service_icon}>
              <BiPackage />
            </div>
            <div className={StyelOurServices.service_text}>
              <h3>PACKAGING</h3>
              <p>
                SECURE AND SAFE PACKAGING Freight .We offers to great packing
                service and managenet .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
