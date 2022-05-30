import React from "react";
import "./AccountStats.less";
import StatsChart from "./StatsChart";
const accountStats = () => {
  return (
    <div className="stats">
      <span className="stats-title">Ten miesiąc</span>
      <div className="stats-chart">
        <StatsChart />
      </div>
    </div>
  );
};

export default accountStats;
