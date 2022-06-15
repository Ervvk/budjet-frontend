import React, { useEffect } from "react";
import { Form, Input, InputNumber, DatePicker, Select, Button } from "antd";
import { validateMessages } from "../../../helpers/functions/validate";
import "../NewTransaction.less";
import "../NewTransaction.module.less";
import { fakeCategories } from "../../../state/fakeData";
import moment from "moment";
const { Option } = Select;

const NewTransactionForm = ({ initialData, handleAction }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(
      initialData?.dateTime
        ? {
            ...initialData,
            dateTime: moment(initialData?.dateTime, "YYYY-MM-DD"),
          }
        : initialData
    );
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
    let transactionFormatted = {
      ...values,
      dateTime: moment(values.dateTime).format("YYYY-MM-DD"),
      key: initialData?.key,
    };
    handleAction(transactionFormatted);
    form.resetFields();
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
        name="dateTime"
        label="Data transakcji"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="title"
        label="Tytuł"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="category"
        label="Kategoria"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          {fakeCategories?.map((category) => {
            return (
              <Option key={category.key} value={category.title}>
                {category.title}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="partner"
        label="Do/od kogo"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sign"
        label="Typ transakcji"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          {" "}
          <Option value="+">Dochód</Option>
          <Option value="-">Wydatek</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="value"
        label="Kwota"
        rules={[
          {
            type: "number",
            min: 10.0,
            max: 100000.0,
            required: true,
          },
        ]}
      >
        <InputNumber precision={2} step={0.1} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Potwierdź
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewTransactionForm;
