import React, { useContext } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.less";
import "./Login.module.less";
//NAV LINK WOULD BE REPLACED BY PROPER LOG-IN CODE
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../state/auth/authContext";

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    //check z api
    authCtx.login(values);
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
