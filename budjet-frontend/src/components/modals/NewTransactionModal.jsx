import React from "react";
import { useState, useEffect } from "react";
import { Modal, message } from "antd";
import NewTransactionForm from "./TransactionModal/NewTransactionForm";
import { useContext } from "react";
import { AuthContext } from "../../state/auth/authContext";
import { addTransaction } from "../../state/TransactionsHttp";

const NewTransactionModal = ({
  isVisible,
  handleModalClose,
  handleRefresh,
}) => {
  const authCtx = useContext(AuthContext);

  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  const handleTransactionAdd = async (transaction) => {
    const addResponse = await addTransaction(
      transaction,
      authCtx.loggedUser.id
    );

    if (typeof addResponse == "string" && addResponse?.includes("kredyt")) {
      message.error("Przekroczyłeś limit kredytowy");
    }
    handleModalClose();
    handleRefresh();
  };

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

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
