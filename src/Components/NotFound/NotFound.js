import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../Images/errorpage.png";
import "../Style/style.css";
import StyleNotFound from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={StyleNotFound.notfound_container}>
      <div className={StyleNotFound.inner_notfound_container}>
        <div className={StyleNotFound.notFoundImage}>
          <img src={NotFoundImage} alt="" />
        </div>
        <div className={StyleNotFound.notFoundText}>
          <div className={StyleNotFound.innerNotFoundText}>
            <h3>We Are Lost ...</h3>
            <p>
              THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN MOVED, RENAMED, OR
              MIGHT NEVER EXISTED.
            </p>
            <Link to="/">
              <button className="primary_btn">Send Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
