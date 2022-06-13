import React, { useState } from "react";
import { fakeUsers } from "../../state/fakeData";
import { usersRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateUsersForm from "../../components/modals/UsersModal/UpdateUsersForm";

const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="transactions">
      <h1>Lista użytkowników aplikacji</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
        }}
      >
        {" "}
        <Button onClick={openModal} type="primary">
          Dodaj nowego usera
        </Button>
      </div>
      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={usersRows}
        tableData={fakeUsers}
        isEditable={true}
        datasetName={"users"}
      />
      <Modal
        title="Dodaj nowego usera"
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
        okText="Potwierdź"
        cancelText="Anuluj"
      >
        {<UpdateUsersForm />}
      </Modal>
    </div>
  );
};

export default Users;
