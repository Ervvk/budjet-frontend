import React from "react";
import { GiJetpack } from "react-icons/gi";
import RegisterForm from "./RegisterForm";
import "./Register.less";
const Register = () => {
  return (
    <div className="register">
      <div className="register-title">
        <h1>BudJet create an account</h1>
        <span>
          <GiJetpack />
        </span>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
