import React, { useEffect } from "react";
import { useReducer } from "react";
import TransactionsContext from "./TransactionsContext";
import { fakeTransactions } from "./fakeData";

const countBalance = (transactions) => {
  let balance = 0;
  transactions.forEach((transaction) => {
    const parsedValue = parseFloat(transaction.amount);

    if (transaction.type === "income") {
      balance += parsedValue;
    }
    if (transaction.type === "outgoing") {
      balance -= parsedValue;
    }
  });

  return balance;
};

const initialState = {
  transactions: [],
  balance: countBalance(fakeTransactions),
};

const TransactionsReducer = (state, action) => {
  let updatedTransactions = [];
  let updatedBalance = state.balance;

  switch (action.type) {
    case "add":
      action.transaction.key =
        state.transactions.length > 0
          ? `${parseInt(state.transactions.at(-1).key) + 1}`
          : "0";
      let parsedValue = parseFloat(action?.transaction?.amount);
      updatedTransactions = [...state.transactions, action.transaction];
      console.log(parsedValue);
      if (action.transaction.type === "income") {
        updatedBalance += parsedValue;
      }
      if (action.transaction.type === "outgoing") {
        updatedBalance -= parsedValue;
      }
      break;

    case "delete":
      updatedTransactions = state.transactions.filter(
        (transaction) => transaction.key !== action.transaction.key
      );
      let parsedVal = parseFloat(action.transaction.value);
      if (action.transaction.type === "income") {
        updatedBalance -= parsedVal;
      }
      if (action.transaction.type === "outgoing") {
        updatedBalance += parsedVal;
      }

      break;
    case "edit":
      updatedTransactions = state.transactions.map((transaction) => {
        let newTransaction = transaction;
        if (transaction.key === action.transaction.key) {
          newTransaction = {
            ...action.transaction,
            userId: transaction.userId,
          };

          if (transaction.value !== action.transaction.value) {
            let parsedVal = parseFloat(action.transaction.value);
            if (action.transaction.type === "income") {
              updatedBalance += parsedVal - transaction.amount;
            }
            if (action.transaction.sign === "outgoing") {
              updatedBalance -= parsedVal + transaction.amount;
            }
          }
        }
        console.log("check", transaction);
        return newTransaction;
      });

      break;
    case "get":
      console.log(action.transactions);
      updatedTransactions = action.transactions.map((transaction) => {
        return { ...transaction, key: transaction.id };
      });
      updatedBalance = countBalance(updatedTransactions);
      break;
    default:
      return updatedTransactions;
  }
  return { transactions: updatedTransactions, balance: updatedBalance };
};

function TransactionsProvider(props) {
  const addTransactionToList = (transaction) => {
    console.log("trans context", transaction);
    dispatchTransactionAction({ type: "add", transaction: transaction });
  };

  const deleteTransaction = (transaction) => {
    dispatchTransactionAction({ type: "delete", transaction: transaction });
  };

  const editSelectedTransaction = (transaction) => {
    dispatchTransactionAction({ type: "edit", transaction: transaction });
  };
  const getTransactions = (transactions) => {
    dispatchTransactionAction({ type: "get", transactions: transactions });
  };

  const [TransactionsState, dispatchTransactionAction] = useReducer(
    TransactionsReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(TransactionsState.transactions)
    );
  }, [TransactionsState.transactions]);

  const transContext = {
    transactions: TransactionsState.transactions.reverse(),
    balance: TransactionsState.balance,
    addTransaction: addTransactionToList,
    deleteTransaction: deleteTransaction,
    editTransaction: editSelectedTransaction,
    getTransactions: getTransactions,
  };

  return (
    <TransactionsContext.Provider value={transContext}>
      {props.children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
