import React, { useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.less";
import "./Login.module.less";
import axios from "axios";
//NAV LINK WOULD BE REPLACED BY PROPER LOG-IN CODE
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../state/auth/authContext";

const LoginForm = () => {
  const fetchData = async (inputValues) => {
    axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
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
      console.log("błędny login lub hasło");
      return;
    }
    if (res.active) {
      authCtx.login(res);
    } else {
      //error message
    }
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
          placeholder="Username"
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
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item></Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
