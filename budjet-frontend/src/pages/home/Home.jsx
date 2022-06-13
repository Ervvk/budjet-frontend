import React, { useState } from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import CustomTable from "../../components/CustomTable/CustomTable";
import "./Home.less";

import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleTransactionsRedirect = () => {
    navigate("transactions");
  };
  return (
    <div className="home">
      <div className="home-widgets">
        <AccountBalance />
        <AccountStats />
      </div>
      <div className="home-table">
        <div className="home-table-heading">
          <span className="home-table-title">Ostatnie wydatki</span>
          <Button onClick={handleTransactionsRedirect} type="primary">
            Zarządzaj transakcjami
          </Button>
        </div>
        <CustomTable
          tableColumns={transactionsRows}
          tableData={fakeTransactions}
          isEditable={false}
          datasetName={""}
        />
      </div>
    </div>
  );
};

export default Home;
