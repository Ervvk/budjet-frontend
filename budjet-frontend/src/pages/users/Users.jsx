import React, { useState, useEffect } from "react";
import { fakeUsers } from "../../state/fakeData";
import { usersRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateUsersForm from "../../components/modals/UsersModal/UpdateUsersForm";
import axios from "axios";
const fetchAdd = async (inputValues) => {
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url: "/admin/addUserByAdmin.php",
    params: { ...inputValues },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};
const fetchdelete = async (inputValues, userID) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url:
      inputValues.type === "income"
        ? "/user/deleteIncome.php"
        : "/user/deleteOutgoing.php",
    params: { id: inputValues.id },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};

const fetchEdit = async (userID, inputValues) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url: "/admin/editUserDataByAdmin.php",
    params: { ...inputValues },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};
const fetchAll = async () => {
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "GET",
    url: "/admin/getAllUsersSorted.php",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const usersData = await fetchAll();
      const usersDataFormatted = usersData.map((user) => {
        return { ...user, key: user.id };
      });
      setUsers(usersDataFormatted);
    };
    getData();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleUserDelete = () => {};
  const handleUserEdit = async (values) => {
    fetchEdit(values);
  };
  const handleUserAdd = async (values) => {
    await fetchAdd(values);
    fetchAll();
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
