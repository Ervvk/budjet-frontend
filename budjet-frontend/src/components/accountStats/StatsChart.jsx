import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";

const StatsChart = () => {
  const data = [
    { month: "Maj 2022", series: "Przychody", value: 1200 },
    { month: "Maj 2022", series: "Wydatki", value: 4000 },
    { month: "Maj 2022", series: "Przychody", value: 2200 },
    { month: "Kwiecień 2022", series: "Wydatki", value: 2000 },
    { month: "Maj 2022", series: "Przychody", value: 1200 },
    { month: "Marzec 2022", series: "Wydatki", value: 4000 },
    { month: "Kwiecień 2022", series: "Wydatki", value: 2200 },
    { month: "Maj 2022", series: "Wydatki", value: 2000 },
    { month: "Maj 2022", series: "Przychody", value: 1200 },
    { month: "Kwiecień 2022", series: "Wydatki", value: 4000 },
    { month: "Maj 2022", series: "Przychody", value: 2200 },
    { month: "Kwiecień 2022", series: "Wydatki", value: 2000 },
  ];
  const config = {
    width: 100,
    data,
    xField: "value",
    yField: "month",
    seriesField: "series",
    isStack: true,
    /** 自定义颜色 */
    color: ["green", "red"],
    label: {
      position: "middle",
      content: (item) => {
        return item.value.toFixed(2);
      },
      style: {
        fill: "#fff",
      },
    },
  };
  return <Bar {...config} />;
};

export default StatsChart;
