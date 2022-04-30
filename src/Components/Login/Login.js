import React, { useState } from "react";
import LoginStyle from "./Login.module.css";
import "../Style/style.css";
import SocialBtn from "../SocialBtn/SocialBtn";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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
          className={LoginStyle.input_field}
          onChange={handlerEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={LoginStyle.input_field}
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
