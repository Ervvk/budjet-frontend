import React, { useEffect, useState } from "react";
import "./Transactions.less";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useContext } from "react";

import { AuthContext } from "../../state/auth/authContext";

import {
  getAllTransactions,
  editTransaction,
  deleteTransaction,
  getUserWallet,
} from "../../state/TransactionsHttp";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const authContext = useContext(AuthContext);
  const userId = authContext.loggedUser.id;
  const userRole = authContext.loggedUser.role;

  const getTransAsync = async () => {
    const fetchedData = await getAllTransactions(userId, userRole);
    if (fetchedData.length > 0) {
      setTransactions(fetchedData);
    }
  };
  const handleTransactionDelete = async (deletedItem) => {
    await deleteTransaction(deletedItem, userId);
    getTransAsync();
  };
  const handleTransactionEdit = async (updatedItem) => {
    console.log(updatedItem);
    await editTransaction(updatedItem, userId);
    getTransAsync();
  };

  useEffect(() => {
    getTransAsync();
  }, []);

  useEffect(() => {
    if (userRole === "user") {
      getUserWallet(userId);
    }
  }, [transactions, userId, userRole]);

  return (
    <div className="transactions">
      <h1>Historia transakcji</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={transactionsRows}
        tableData={transactions}
        isEditable={true}
        datasetName={"transactions"}
        handleDeleteRecord={handleTransactionDelete}
        handleEditRecord={handleTransactionEdit}
      />
    </div>
  );
};

export default Transactions;
