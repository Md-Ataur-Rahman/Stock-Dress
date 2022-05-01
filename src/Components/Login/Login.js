import React, { useEffect, useState } from "react";
import LoginStyle from "./Login.module.css";
import "../Style/style.css";
import SocialBtn from "../SocialBtn/SocialBtn";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    emailPassEser,
    emailPassLoading,
    emailPassError,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  const handlerEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlerPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
    console.log(userInfo);
  };

  return (
    <section className={LoginStyle.login_section}>
      <form onSubmit={handlerOnSubmit} className={LoginStyle.form_container}>
        <h3 className={LoginStyle.form_header}>Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input_field"
          onChange={handlerEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input_field"
          onChange={handlerPasswordChange}
        />
        <input
          style={{ width: "100%", borderRadius: "20px" }}
          type="submit"
          value="Login"
          className="primary_btn"
        />
        <SocialBtn />
      </form>
    </section>
  );
};

export default Login;
