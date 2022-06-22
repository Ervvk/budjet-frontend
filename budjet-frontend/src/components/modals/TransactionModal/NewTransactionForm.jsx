import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, DatePicker, Select, Button } from "antd";
import { validateMessages } from "../../../helpers/functions/validate";
import "../NewTransaction.less";
import "../NewTransaction.module.less";
import moment from "moment";
import { getAllCategories } from "../../../state/CategoriesHttp";
const { Option } = Select;

const NewTransactionForm = ({ initialData, handleAction }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const get = async () => {
      const fetchedCategories = await getAllCategories();
      setCategories(fetchedCategories);
    };
    get();
  }, []);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(
      initialData?.date
        ? {
            ...initialData,
            date: moment(initialData?.date, "YYYY-MM-DD"),
            amount: parseFloat(initialData.amount),
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
      date: moment(values.date).format("YYYY-MM-DD"),
      key: initialData?.key,
      userId: initialData?.userId,
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
        name="date"
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
          {categories?.map((category) => {
            return (
              <Option key={category.key} value={category.name}>
                {category.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item
        name="source"
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
        name="type"
        label="Typ transakcji"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          {" "}
          <Option value="income">Dochód</Option>
          <Option value="outgoing">Wydatek</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="amount"
        label="Kwota"
        rules={[
          {
            type: "number",
            min: 1.0,
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
