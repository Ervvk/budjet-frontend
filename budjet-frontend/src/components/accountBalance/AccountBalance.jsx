import React, { useState } from "react";
import "./AccountBalance.less";
import { MdOutlineSavings } from "react-icons/md";
import { Button } from "antd";
import NewTransactionModal from "../newTransaction/NewTransactionModal";

const AccountBalance = () => {
  const balance = 1200.5;
  const currency = "pln";
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
            balance > 0 ? "balance-value-plus" : "balance-value-minus"
          }`}
        >
          {balance > 0 ? `+${balance} ` : `-${balance} `}
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
