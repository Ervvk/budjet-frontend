import React, { useEffect } from "react";

import "./Transactions.less";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";
import { AuthContext } from "../../state/auth/authContext";

import axios from "axios";

const fetchAll = async (userID, userRole) => {
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "GET",
    url:
      userRole === "admin"
        ? "/shared/listAllTransactions.php"
        : "/shared/getAllUserTransactions.php",
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

const fetchData = async (inputValues, userID) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "POST",
    url: "/shared/editSingleTransaction.php",
    params: { ...inputValues, userId: userID, id: inputValues.key },
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

const fetchDataDelete = async (inputValues, userID) => {
  console.log("idk:", userID);
  axios.defaults.baseURL = "http://budjet.pawelek2111.ct8.pl";
  const params = {
    method: "PUT",
    url:
      inputValues.type === "income"
        ? "/user/deleteIncome.php"
        : "/user/deleteOutgoing.php",
    params: { id: inputValues.id },
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

const Transactions = () => {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionsData = transactionsCtx.transactions.reverse();
  const authContext = useContext(AuthContext);

  const handleTransactionDelete = (deletedItem) => {
    transactionsCtx.deleteTransaction(deletedItem);
  };
  const handleTransactionEdit = (updatedItem) => {
    console.log(updatedItem);

    transactionsCtx.editTransaction(updatedItem);
    // do zmiany id
    fetchData(updatedItem, 2);
  };

  useEffect(() => {
    const get = async () => {
      const fetchedData = await fetchAll(2, authContext.loggedUser.role);
      if (fetchedData.length > 0) {
        transactionsCtx.getTransactions(fetchedData);
      }
    };
    get();
  }, []);

  return (
    <div className="transactions">
      <h1>Historia transakcji</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={transactionsRows}
        tableData={transactionsData}
        isEditable={true}
        datasetName={"transactions"}
        handleDeleteRecord={handleTransactionDelete}
        handleEditRecord={handleTransactionEdit}
      />
    </div>
  );
};

export default Transactions;
