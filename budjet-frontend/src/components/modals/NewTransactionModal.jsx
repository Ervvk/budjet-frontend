import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "antd";
import NewTransactionForm from "./TransactionModal/NewTransactionForm";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";
import { AuthContext } from "../../state/auth/authContext";
import axios from "axios";

const fetchData = async (inputValues, userID) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url:
      inputValues.type === "income"
        ? "/user/addIncome.php"
        : "/user/addOutgoing.php",
    params: { ...inputValues, userId: userID },
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

const NewTransactionModal = ({ isVisible, handleModalClose }) => {
  const transactionsCtx = useContext(TransactionsContext);
  const authCtx = useContext(AuthContext);
  const transactionsData = transactionsCtx.transactions;
  const [isModalVisible, setIsModalVisible] = useState(isVisible);

  const handleTransactionAdd = (transaction) => {
    transactionsCtx.addTransaction(transaction);
    fetchData(transaction, 2);
    handleModalClose();
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
