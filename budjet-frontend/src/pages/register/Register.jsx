import React from "react";
import { GiJetpack } from "react-icons/gi";
import RegisterForm from "./RegisterForm";
import { Button } from "antd";
import "./Register.less";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="register-title">
        <h1>BudJet stwórz konto</h1>
        <span>
          <GiJetpack />
        </span>
      </div>
      <RegisterForm />
      <Button onClick={handleLoginRedirect}>Powrót do logowania</Button>
    </div>
  );
};

export default Register;
