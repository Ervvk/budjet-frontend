import React, { useEffect } from "react";
import { Form, Input, Select, Checkbox, Switch } from "antd";
import { validateMessages } from "../../../helpers/functions/validate";
import "../NewTransaction.less";
import "../NewTransaction.module.less";

const { Option } = Select;

const UpdateUsersForm = ({ initialData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [form, initialData]);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
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
        name="userName"
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
      <Form.Item
        name="permission"
        label="Typ usera"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option value="user">User</Option>
          <Option value="admin">Admin</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="isActive"
        label="Aktywny"
        valuePropName="checked"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default UpdateUsersForm;
