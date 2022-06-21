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
import { AuthContext } from "../../state/auth/authContext";

import axios from "axios";
import { useEffect } from "react";

const fetchData = async (userID) => {
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "GET",
    url: "/shared/getAllUserTransactions.php",
    params: { userId: 2 },
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
const Home = () => {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionsData = transactionsCtx.transactions.reverse();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const getData = async () => {
      const dbTransactions = await fetchData(authCtx.loggedUser.id);
      if (dbTransactions.length > 0) {
        transactionsCtx.getTransactions(dbTransactions);
      }
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const handleTransactionsRedirect = () => {
    navigate("/transactions");
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
