import React, { useState, useEffect } from "react";

import { Table, Modal } from "antd";
import "./CustomTable.less";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import UpdateCategoriesForm from "../modals/CategoriesModal/UpdateCategoriesForm";
import UpdateUsersForm from "../modals/UsersModal/UpdateUsersForm";
import NewTransactionForm from "../modals/TransactionModal/NewTransactionForm";

const CustomTable = ({
  tableData,
  tableColumns,
  isEditable,
  datasetName,
  handleDeleteRecord,
  handleEditRecord,
}) => {
  const [modalSchema, setModalSchema] = useState(<></>);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const onDeleteRecord = (record) => {
    Modal.confirm({
      title: "Czy na pewno chcesz usunąć ten rekord?",
      okText: "Tak",
      cancelText: "Anuluj",
      okType: "danger",
      onOk: () => {
        handleDeleteRecord(record);
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
        setModalSchema(
          <NewTransactionForm
            initialData={{ ...record }}
            handleAction={handleEditRecord}
          />
        );
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
        footer={null}
        onCancel={() => {
          resetEditing();
        }}
      >
        {modalSchema}
      </Modal>
    </div>
  );
};

export default CustomTable;
