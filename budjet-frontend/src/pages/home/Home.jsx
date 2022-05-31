import React, { useState } from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import "./Home.less";

import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/tablesSchemas";
const Home = () => {
  return (
    <div className="home">
      <div className="home-widgets">
        <AccountBalance />
        <AccountStats />
      </div>
      <div className="home-table">
        <span className="home-table-title">Ostatnie wydatki</span>
        <TransactionsTable
          tableColumns={transactionsRows}
          tableData={fakeTransactions}
        />
      </div>
    </div>
  );
};

export default Home;
