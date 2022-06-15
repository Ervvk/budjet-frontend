import React from "react";

import "./Transactions.less";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useContext } from "react";
import TransactionsContext from "../../state/TransactionsContext";
const Transactions = () => {
  const transactionsCtx = useContext(TransactionsContext);
  const transactionsData = transactionsCtx.transactions.reverse();
  const handleTransactionDelete = (deletedItem) => {
    transactionsCtx.deleteTransaction(deletedItem);
  };
  const handleTransactionEdit = (updatedItem) => {
    transactionsCtx.editTransaction(updatedItem);
  };

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
