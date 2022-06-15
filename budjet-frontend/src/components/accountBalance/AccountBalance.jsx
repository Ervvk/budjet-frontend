import React, { useState } from "react";
import "./AccountBalance.less";
import { MdOutlineSavings } from "react-icons/md";
import { Button } from "antd";
import NewTransactionModal from "../modals/NewTransactionModal";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";

const AccountBalance = () => {
  const transactionsCtx = useContext(TransactionsContext);
  const balance = transactionsCtx.balance;
  console.log(typeof balance);
  const currency = " pln";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="balance">
      <div className="balance-content">
        <span className="balance-title">Twój portfel</span>
        <span className="balance-subtitle">Stan konta</span>
        <span
          className={`balance-value ${
            balance >= 0 ? "balance-value-plus" : "balance-value-minus"
          }`}
        >
          {balance.toFixed(2)}
          <span className="balance-currency">{currency}</span>
        </span>
      </div>{" "}
      <div className="balance-funcs">
        <span className="balance-icon">
          <MdOutlineSavings />
        </span>
        <Button type="primary" className="balance-btn" onClick={openModal}>
          Nowa transakcja
        </Button>
      </div>
      <NewTransactionModal
        isVisible={isModalVisible}
        handleModalClose={closeModal}
      />
    </div>
  );
};

export default AccountBalance;
