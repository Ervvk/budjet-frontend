import React, { useState } from "react";

import { Table } from "antd";
import "./TransactionsTable.less";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const CustomTable = ({ tableData, tableColumns }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    ...tableColumns,
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <div>
            <AiOutlineEdit
              onClick={() => {
                //onEditStudent(record);
              }}
            />
            <AiOutlineDelete
              onClick={() => {
                // onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </div>
        );
      },
    },
  ];
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      ></div>
      <Table columns={columns} dataSource={tableData} />
    </div>
  );
};

export default CustomTable;
