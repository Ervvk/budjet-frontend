import React, { useState, useEffect } from "react";

import { Table, Modal } from "antd";
import "./CustomTable.less";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import UpdateCategoriesForm from "../modals/CategoriesModal/UpdateCategoriesForm";
import UpdateUsersForm from "../modals/UsersModal/UpdateUsersForm";
import NewTransactionForm from "../modals/TransactionModal/NewTransactionForm";

const CustomTable = ({ tableData, tableColumns, isEditable, datasetName }) => {
  const [modalSchema, setModalSchema] = useState(<></>);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [dataSource, setDataSource] = useState(tableData);

  const onAddRecord = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newRecord = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newRecord];
    });
  };
  const onDeleteRecord = (record) => {
    Modal.confirm({
      title: "Czy na pewno chcesz usunąć ten rekord?",
      okText: "Tak",
      cancelText: "Anuluj",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((record) => record.id !== record.id);
        });
      },
    });
  };
  const onEditRecord = (record) => {
    setIsEditing(true);
    setEditingRecord({ ...record });
    switch (datasetName) {
      case "categories":
        setModalSchema(<UpdateCategoriesForm initialData={{ ...record }} />);
        break;
      case "users":
        setModalSchema(<UpdateUsersForm initialData={{ ...record }} />);
        break;
      case "transactions":
        setModalSchema(<NewTransactionForm initialData={{ ...record }} />);
        break;
      default:
        break;
    }
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingRecord(null);
  };

  const columns = [
    ...tableColumns,

    ...(isEditable
      ? [
          {
            key: "5",
            title: "Edytuj / Usuń",
            render: (record) => {
              return (
                <div className="">
                  <AiOutlineEdit
                    className="table-btn-action"
                    onClick={() => {
                      onEditRecord(record);
                    }}
                  />
                  <AiOutlineDelete
                    className="table-btn-action"
                    onClick={() => {
                      onDeleteRecord(record);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  />
                </div>
              );
            },
          },
        ]
      : []),
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
      <Modal
        title="Edytuj rekord"
        visible={isEditing}
        okText="Potwierdź"
        cancelText="Anuluj"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((record) => {
              if (record.id === editingRecord.id) {
                return editingRecord;
              } else {
                return record;
              }
            });
          });
          resetEditing();
        }}
      >
        {modalSchema}
      </Modal>
    </div>
  );
};

export default CustomTable;
