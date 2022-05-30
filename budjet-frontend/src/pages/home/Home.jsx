import React from "react";
import AccountBalance from "../../components/accountBalance/AccountBalance";
import AccountStats from "../../components/accountStats/AccountStats";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import "./Home.less";
const Home = () => {
  return (
    <div className="home">
      <div className="home-widgets">
        <AccountBalance />
        <AccountStats />
      </div>
      <div className="home-table">
        <span className="home-table-title">Ostatnie wydatki</span>
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Home;
