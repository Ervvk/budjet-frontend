import React, { useState } from "react";

import { Table, Button } from "antd";
import "./TransactionsTable.less";
import { fakeTransactions } from "../../state/fakeData";

const TransactionsTable = ({ tableData, tableColumns }) => {
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
        columns={tableColumns}
        dataSource={tableData}
      />
    </div>
  );
};

export default TransactionsTable;
