import React, { useState } from "react";

import { Table, Button } from "antd";
import "./TransactionsTable.less";
import { fakeTransactions } from "../../state/fakeData";

const columns = [
  { title: "ID", dataIndex: "id" },
  {
    title: "Data",
    dataIndex: "dateTime",
  },
  {
    title: "Źródło",
    dataIndex: "partner",
  },
  {
    title: "Tytuł",
    dataIndex: "title",
  },
  {
    title: "Kategoria",
    dataIndex: "category",
  },
  {
    title: "Rodzaj",
    dataIndex: "sign",
  },
  {
    title: "Kwota",
    dataIndex: "value",
  },
];

const TransactionsTable = () => {
  const transactionsData = fakeTransactions;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={transactionsData}
      />
    </div>
  );
};

export default TransactionsTable;
