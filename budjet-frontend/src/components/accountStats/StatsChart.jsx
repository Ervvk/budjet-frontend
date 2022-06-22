import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  barThickness: 38,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
    },
  },
};
const labels = [``];

const StatsChart = ({ chartData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Przychody",
        data: chartData.incomes
          ? [chartData.incomes.reduce((sum, inc) => sum + inc.amount, 0)]
          : [],
        borderColor: "black",
        backgroundColor: "green",
      },
      {
        label: "Wydatki",
        data: chartData.outgoings
          ? [chartData.outgoings.reduce((sum, inc) => sum + inc.amount, 0)]
          : [],
        borderColor: "black",
        backgroundColor: "red",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default StatsChart;
