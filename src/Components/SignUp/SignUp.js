import React, { useState } from "react";
import auth from "../../firebase.init";
import SocialBtn from "../SocialBtn/SocialBtn";
import StyleSignUp from "./SignUp.module.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handlerNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handlerEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlerPasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);

    console.log(userInfo);
  };
  return (
    <section className={StyleSignUp.signup_section}>
      <form onSubmit={handlerOnSubmit} className={StyleSignUp.form_container}>
        <h3 className={StyleSignUp.form_header}>SignUp</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={StyleSignUp.input_field}
          onSubmit={handlerNameChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={StyleSignUp.input_field}
          onChange={handlerEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={StyleSignUp.input_field}
          onChange={handlerPasswordChange}
        />
        <input
          style={{ width: "100%", borderRadius: "20px" }}
          type="submit"
          value="SignUp"
          className="primary_btn"
        />
        <SocialBtn />
      </form>
    </section>
  );
};

export default SignUp;
