import React from "react";

const TransactionsContext = React.createContext({
  balance: 0.0,
  transactions: [],
  addTransaction: (item) => {},
  editTransaction: (item) => {},
  deleteTransaction: (item) => {},
});

export default TransactionsContext;
