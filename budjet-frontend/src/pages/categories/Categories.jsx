import React, { useState } from "react";
import { fakeCategories } from "../../state/fakeData";
import { categoriesRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateCategoriesForm from "../../components/modals/CategoriesModal/UpdateCategoriesForm";
import axios from "axios";
const fetchAdd = async (inputValues) => {
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url: "/admin/addCategory.php",
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

const fetchEdit = async (userID) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url: "/admin/editUserDataByAdmin.php",
    params: { userId: userID },
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
const Categories = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleCategoryDelete = () => {};
  const handleCategoryEdit = () => {};
  const handleCategoryAdd = async (values) => {
    fetchAdd(values);
    //fetchAll();
  };

  return (
    <div className="transactions">
      <h1>Lista kategorii dostępnych dla użytkowników</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
        }}
      >
        {" "}
        <Button onClick={openModal} type="primary">
          Dodaj nową kategorię
        </Button>
      </div>

      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={categoriesRows}
        tableData={fakeCategories}
        isEditable={true}
        datasetName={"categories"}
        handleDeleteRecord={handleCategoryDelete}
        handleEditRecord={handleCategoryEdit}
      />
      <Modal
        title="Dodaj nową kategorię"
        visible={isModalVisible}
        footer={null}
        onCancel={closeModal}
      >
        {<UpdateCategoriesForm handleAction={handleCategoryAdd} />}
      </Modal>
    </div>
  );
};

export default Categories;
