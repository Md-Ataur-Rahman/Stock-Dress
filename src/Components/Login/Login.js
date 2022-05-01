import React, { useEffect, useState } from "react";
import LoginStyle from "./Login.module.css";
import "../Style/style.css";
import SocialBtn from "../SocialBtn/SocialBtn";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
  useEffect(() => {
    const errorText = emailPassError || error;
    if (errorText) {
      console.log(errorText?.code);
      switch (errorText?.code) {
        case "auth/invalid-email":
          toast("Invalid Email, Please Enter A Valid Email");
          break;
        case "auth/wrong-password":
          toast("Wrong password, Please Enter A Valid Password");
          break;
        case "auth/user-not-found":
          toast("User Not Found, Please Enter A Valid User");
          break;
        default:
          toast("Somthing Is Wrong");
      }
    }
  }, [emailPassError, error]);
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
        <p className="text-center py-2 text-secondary">
          Create a new Account?
          <Link
            className="px-2"
            style={{ color: "#17C3B2", textDecoration: "none" }}
            to="/signup"
          >
            SignUp
          </Link>
        </p>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
