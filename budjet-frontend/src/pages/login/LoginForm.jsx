import React, { useContext } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.less";
import "./Login.module.less";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../state/auth/authContext";
import { API_URL } from "../../helpers/functions/http";
const LoginForm = () => {
  const navigate = useNavigate();
  const fetchData = async (inputValues) => {
    axios.defaults.baseURL = API_URL;
    const params = {
      method: "POST",
      url: "/login.php",
      params: {
        login: inputValues.username,
        password: inputValues.password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios.request(params);
      return result.data.response;
    } catch (error) {
      return error;
    }
  };

  const authCtx = useContext(AuthContext);
  const onFinish = async (values) => {
    //check z api

    const res = await fetchData(values);
    if (res === "incorrectLogin") {
      message.error("Błędny login lub hasło!");
      return;
    }
    if (res.active === "1") {
      authCtx.login(res);
    } else {
      message.error("Ten user nie jest aktywny!");
    }
  };
  const handleRegisterOpen = () => {
    navigate("/register");
  };
  const handleFaqOpen = () => {
    navigate("/faq");
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Login"
          className="login-form-input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          className="login-form-input"
          type="password"
          placeholder="Hasło"
        />
      </Form.Item>
      <Form.Item></Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Zaloguj się
        </Button>

        <div style={{ width: "90%", display: "flex", gap: "1rem" }}>
          <Button onClick={handleRegisterOpen}>Zarejestruj się</Button>
          <Button onClick={handleFaqOpen}>F A Q</Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
