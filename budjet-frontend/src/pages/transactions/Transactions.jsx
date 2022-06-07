import React from "react";

import "./Transactions.less";
import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";
import CustomTable from "../../components/CustomTable/CustomTable";

const Transactions = () => {
  return (
    <div className="transactions">
      <h1>Historia Twoich transakcji</h1>
      <div className="transactions-table-wrap"></div>
      <CustomTable
        tableColumns={transactionsRows}
        tableData={fakeTransactions}
      />
    </div>
  );
};

export default Transactions;
