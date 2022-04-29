import React from "react";
import LoginStyle from "./Login.module.css";
import "../Style/style.css";

const Login = () => {
  return (
    <section className={LoginStyle.login_section}>
      <form className={LoginStyle.form_container}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={LoginStyle.input_field}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={LoginStyle.input_field}
        />
        <input
          style={{ width: "100%", borderRadius: "20px" }}
          type="submit"
          value="Login"
          className="primary_btn"
        />
      </form>
    </section>
  );
};

export default Login;
