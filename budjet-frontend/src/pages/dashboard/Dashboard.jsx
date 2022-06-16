import React from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import CustomTable from "../../components/CustomTable/CustomTable";
import "./Dashboard.less";

import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";

const Home = () => {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionsData = transactionsCtx.transactions.reverse();

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
          <span className="home-table-title">Ostatnie transakcje</span>
          <Button onClick={handleTransactionsRedirect} type="primary">
            Zarządzaj transakcjami
          </Button>
        </div>
        <CustomTable
          tableColumns={transactionsRows}
          tableData={transactionsData.filter((trans, idx) => idx < 5)}
          isEditable={false}
          datasetName={""}
        />
      </div>
    </div>
  );
};

export default Home;
