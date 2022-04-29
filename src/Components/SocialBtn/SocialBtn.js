import React from "react";
import StyeleSocialBtn from "./SocialBtn.module.css";
import "../Style/style.css";

const SocialBtn = () => {
  return (
    <div>
      <div className={StyeleSocialBtn.social_divider}>
        <div className={StyeleSocialBtn.divider_left}></div>
        <div className={StyeleSocialBtn.or_divider}>OR</div>
        <div className={StyeleSocialBtn.divider_right}></div>
      </div>

      <button className={StyeleSocialBtn.social_btn}>Google</button>
    </div>
  );
};

export default SocialBtn;
