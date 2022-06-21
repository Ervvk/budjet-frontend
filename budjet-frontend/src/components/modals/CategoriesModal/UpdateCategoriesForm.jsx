import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { validateMessages } from "../../../helpers/functions/validate";
import "../NewTransaction.less";
import "../NewTransaction.module.less";

const UpdateCategoriesForm = ({ initialData, handleAction }) => {
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
    form.resetFields();
    handleAction(values);
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
        name="title"
        label="Nazwa kategorii"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Potwierdź
      </Button>
    </Form>
  );
};

export default UpdateCategoriesForm;
