import React, { useState } from "react";
import { fakeCategories } from "../../state/fakeData";
import { categoriesRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { Button, Modal } from "antd";
import UpdateCategoriesForm from "../../components/modals/CategoriesModal/UpdateCategoriesForm";

const Categories = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
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
      />
      <Modal
        title="Dodaj nową kategorię"
        visible={isModalVisible}
        onOk={closeModal}
        onCancel={closeModal}
        okText="Potwierdź"
        cancelText="Anuluj"
      >
        {<UpdateCategoriesForm />}
      </Modal>
    </div>
  );
};

export default Categories;
