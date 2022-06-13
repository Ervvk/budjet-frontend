import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import NewTransactionForm from "./TransactionModal/NewTransactionForm";

const NewTransactionModal = ({ isVisible, handleModalClose }) => {
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  const handleOk = () => {
    handleModalClose();
  };

  const handleCancel = () => {
    handleModalClose();
  };

  return (
    <Modal
      title="Dodaj nową transakcję"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Potwierdź"
      cancelText="Anuluj"
    >
      <NewTransactionForm />
    </Modal>
  );
};

export default NewTransactionModal;
