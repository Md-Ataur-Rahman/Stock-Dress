import React, { useEffect, useState } from "react";
import LoginStyle from "./Login.module.css";
import "../Style/style.css";
import SocialBtn from "../SocialBtn/SocialBtn";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
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
  const [sendPasswordResetEmail, sending, e] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        case "auth/internal-error":
          // toast("User Not Found, Please Enter A Valid User");
          break;
        default:
          toast("Somthing Is Wrong");
      }
    }
  }, [emailPassError, error]);
  const handlerReset = async () => {
    if (userInfo?.email) {
      await sendPasswordResetEmail(userInfo.email);
      toast("Sent email");
    } else {
      toast("Please fill up require email");
    }
  };

  useEffect(() => {
    if (user) {
      fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({
          email: user.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.token);
          navigate(from, { replace: true });
        });
    }
  }, [user]);
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
        <button
          onClick={handlerReset}
          styel={{ textDecoration: "none" }}
          className="btn btn-link text-dark"
        >
          Reset Password
        </button>
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
