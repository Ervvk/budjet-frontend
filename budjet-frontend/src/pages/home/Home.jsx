import React, { useState } from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import CustomTable from "../../components/CustomTable/CustomTable";
import "./Home.less";

import { fakeTransactions } from "../../state/fakeData";
import { transactionsRows } from "../../components/CustomTable/tablesSchemas";

const Home = () => {
  return (
    <div className="home">
      <div className="home-widgets">
        <AccountBalance />
        <AccountStats />
      </div>
      <div className="home-table">
        <span className="home-table-title">Ostatnie wydatki</span>
        <CustomTable
          tableColumns={transactionsRows}
          tableData={fakeTransactions}
        />
      </div>
    </div>
  );
};

export default Home;
