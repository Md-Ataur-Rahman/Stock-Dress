import React from "react";
import StyeleSocialBtn from "./SocialBtn.module.css";
import "../Style/style.css";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const SocialBtn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className={StyeleSocialBtn.social_divider}>
        <div className={StyeleSocialBtn.divider_left}></div>
        <div className={StyeleSocialBtn.or_divider}>OR</div>
        <div className={StyeleSocialBtn.divider_right}></div>
      </div>

      <button
        className={StyeleSocialBtn.social_btn}
        onClick={() => signInWithGoogle()}
      >
        Google
      </button>
    </div>
  );
};

export default SocialBtn;
