import React, { useState, useEffect } from "react";
import { categoriesRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateCategoriesForm from "../../components/modals/CategoriesModal/UpdateCategoriesForm";
import {
  addCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
} from "../../state/CategoriesHttp";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const get = async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
    };
    get();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleCategoryDelete = async (category) => {
    await deleteCategory(category.id);
    const allCategories = await getAllCategories();
    setCategories(allCategories);
  };
  const handleCategoryEdit = async (category) => {
    await editCategory({ categoryId: category.id, name: category.name });
    const allCategories = await getAllCategories();
    setCategories(allCategories);
  };
  const handleCategoryAdd = async (values) => {
    await addCategory(values);
    const allCategories = await getAllCategories();
    setCategories(allCategories);
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
        tableData={categories}
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
