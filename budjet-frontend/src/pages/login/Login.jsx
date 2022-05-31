import React from "react";
import { GiJetpack } from "react-icons/gi";
import "./Login.less";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login-title">
        <h1>BudJet</h1>
        <span>
          <GiJetpack />
        </span>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
