import React from "react";
import "./AccountStats.less";
import StatsChart from "./StatsChart";

const AccountStats = ({ chartData }) => {
  return (
    <div className="stats">
      <span className="stats-title">Ten miesiąc</span>
      <div className="stats-chart">
        <StatsChart chartData={chartData} />
      </div>
    </div>
  );
};

export default AccountStats;
