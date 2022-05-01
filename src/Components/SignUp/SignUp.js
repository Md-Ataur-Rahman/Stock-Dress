import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import SocialBtn from "../SocialBtn/SocialBtn";
import StyleSignUp from "./SignUp.module.css";
import "../Style/style.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    createEmailPassuser,
    createEmailPassloading,
    createEmailPasserror,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(createEmailPasserror);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
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
  useEffect(() => {
    const errorText = createEmailPasserror || error;
    if (errorText) {
      console.log(errorText?.code);
      switch (errorText?.code) {
        case "auth/weak-password":
          toast("Invalid Email, Please Enter A Strong Email");
          break;
        case "auth/email-already-in-use":
          toast("Email already In use");
          break;
        default:
          toast("Somthing Is Wrong");
      }
    }
  }, [createEmailPasserror]);

  return (
    <section className={StyleSignUp.signup_section}>
      <form onSubmit={handlerOnSubmit} className={StyleSignUp.form_container}>
        <h3 className={StyleSignUp.form_header}>SignUp</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input_field"
          onSubmit={handlerNameChange}
        />
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
          value="SignUp"
          className="primary_btn"
        />
        <SocialBtn />
        <p className="text-center py-2 text-secondary">
          Have an account?
          <Link
            className="px-2"
            style={{ color: "#17C3B2", textDecoration: "none" }}
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
