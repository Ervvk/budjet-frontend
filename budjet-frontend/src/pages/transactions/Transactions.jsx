import React from "react";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import "./Transactions.less";
import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/tablesSchemas";
const Transactions = () => {
  return (
    <div className="transactions">
      <h1>Historia Twoich transakcji</h1>
      <div className="transactions-table-wrap"></div>
      <TransactionsTable
        tableColumns={transactionsRows}
        tableData={fakeTransactions}
      />
    </div>
  );
};

export default Transactions;
