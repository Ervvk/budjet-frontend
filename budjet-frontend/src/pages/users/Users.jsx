import React, { useState, useEffect } from "react";
import { usersRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateUsersForm from "../../components/modals/UsersModal/UpdateUsersForm";
import { useContext } from "react";
import { AuthContext } from "../../state/auth/authContext";
import {
  addUser,
  deleteUser,
  editUser,
  getAllUsers,
} from "../../state/usersHttp";
const Users = () => {
  const authContext = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const getData = async () => {
    const usersData = await getAllUsers();
    const usersDataFormatted = usersData.map((user) => {
      return { ...user, key: user.id };
    });
    setUsers(usersDataFormatted);
  };

  useEffect(() => {
    getData();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleUserDelete = async (values) => {
    await deleteUser(values.id);
    getData();
  };
  const handleUserEdit = async (values) => {
    await editUser(values);
    getData();
  };
  const handleUserAdd = async (values) => {
    await addUser(values);
    getData();
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
        tableData={users}
        isEditable={true}
        datasetName={"users"}
        handleDeleteRecord={handleUserDelete}
        handleEditRecord={handleUserEdit}
      />
      <Modal
        title="Dodaj nowego usera"
        visible={isModalVisible}
        footer={null}
        onCancel={closeModal}
      >
        {<UpdateUsersForm handleAction={handleUserAdd} />}
      </Modal>
    </div>
  );
};

export default Users;
