import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import NewTransactionForm from "./TransactionModal/NewTransactionForm";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";
const NewTransactionModal = ({ isVisible, handleModalClose }) => {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionsData = transactionsCtx.transactions;
  const [isModalVisible, setIsModalVisible] = useState(isVisible);
  const handleTransactionAdd = (transaction) => {
    transactionsCtx.addTransaction(transaction);
  };

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
      onCancel={handleCancel}
      footer={null}
    >
      <NewTransactionForm handleAction={handleTransactionAdd} />
    </Modal>
  );
};

export default NewTransactionModal;
