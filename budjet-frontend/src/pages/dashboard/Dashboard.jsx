import React, { useCallback, useState } from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import CustomTable from "../../components/CustomTable/CustomTable";
import "./Dashboard.less";

import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../state/auth/authContext";
import {
  getAllTransactions,
  getUserWallet,
} from "../../state/TransactionsHttp";
import { useEffect } from "react";
import moment from "moment";

const Home = () => {
  const authContext = useContext(AuthContext);
  const userId = authContext.loggedUser.id;
  const userRole = authContext.loggedUser.role;
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);

  const getTableData = async () => {
    const dbTransactions = await getAllTransactions(userId, userRole);

    const topTransactions = dbTransactions
      .sort((a, b) => moment(b.date).unix() - moment(a.date).unix())
      .slice(0, 5);

    setTransactions(topTransactions);
  };

  const getChartData = async () => {
    const fetchedData = await getAllTransactions(userId, userRole);

    let separatedData = { incomes: [], outgoings: [] };

    fetchedData.forEach((trans) => {
      const getMonthYear = (date) => {
        return date.getMonth() + "." + date.getFullYear();
      };
      const transDate = new Date(trans.date);
      const current = new Date();
      const monthYearTrans = getMonthYear(transDate);
      const monthYearCur = getMonthYear(current);
      if (monthYearTrans === monthYearCur) {
        if (trans.type === "outgoing") {
          separatedData.outgoings.push({ ...trans, month: monthYearTrans });
        } else if (trans.type === "income") {
          separatedData.incomes.push({ ...trans, month: monthYearTrans });
        }
      }
    });
    setChartData(separatedData);
  };

  const getBalance = async () => {
    const walletBalance = await getUserWallet(userId);
    setWalletBalance(walletBalance);
  };
  const updateAll = async () => {
    await getChartData();
    await getBalance();
    await getTableData();
  };

  useEffect(() => {
    updateAll();
  }, []);

  const navigate = useNavigate();
  const handleTransactionsRedirect = () => {
    navigate("/transactions");
  };
  return (
    <div className="home">
      <div className="home-widgets">
        <AccountBalance balance={walletBalance} updateFunctions={updateAll} />
        <AccountStats chartData={chartData} />
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
          tableData={transactions}
          isEditable={false}
          datasetName={""}
        />
      </div>
    </div>
  );
};

export default Home;
