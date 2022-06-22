import React from "react";
import { Form, Input, Button, message } from "antd";
import "./Register.less";
import axios from "axios";
import { API_URL } from "../../helpers/functions/http";

const registerPost = async (inputValues) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/register.php",
    params: {
      ...inputValues,
    },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    if (typeof result.data == "string") return result.data;
    else {
      return "false";
    }
  } catch (error) {
    return error;
  }
};

const RegisterForm = () => {
  const onFinish = async (values) => {
    const registerResponse = await registerPost(values);

    if (registerResponse.includes("correctRegister")) {
      message.success("Konto utworzone, możesz się zalogować");
    } else {
      message.error("Nie udało się utworzyć konta");
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
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="login"
        label="Login"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Hasło"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Imię"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="surname"
        label="Nazwisko"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Zarejestruj się
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
