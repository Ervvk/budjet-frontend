import React from "react";

import "./Transactions.less";
import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";
import NewTransactionForm from "../../components/modals/TransactionModal/NewTransactionForm";
const Transactions = () => {
  return (
    <div className="transactions">
      <h1>Historia transakcji</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={transactionsRows}
        tableData={fakeTransactions}
        isEditable={true}
        datasetName={"transactions"}
      />
    </div>
  );
};

export default Transactions;
