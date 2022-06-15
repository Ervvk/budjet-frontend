import React, { useEffect } from "react";
import { useReducer } from "react";
import TransactionsContext from "./TransactionsContext";
import { fakeTransactions } from "./fakeData";

const countBalance = (transactions) => {
  let balance = 0;
  transactions.forEach((transaction) => {
    const parsedValue = parseFloat(transaction.value);

    if (transaction.sign === "+") {
      balance += parsedValue;
    }
    if (transaction.sign === "-") {
      balance -= parsedValue;
    }
  });

  return balance;
};

const initialState = {
  transactions: fakeTransactions,
  balance: countBalance(fakeTransactions),
};

const TransactionsReducer = (state, action) => {
  let updatedTransactions = [];
  let updatedBalance = state.balance;

  switch (action.type) {
    case "add":
      action.transaction.key = `${parseInt(state.transactions.at(-1).key) + 1}`;
      let parsedValue = parseFloat(action?.transaction?.value);
      updatedTransactions = [...state.transactions, action.transaction];
      if (action.transaction.sign === "+") {
        updatedBalance += parsedValue;
      }
      if (action.transaction.sign === "-") {
        updatedBalance -= parsedValue;
      }
      break;

    case "delete":
      updatedTransactions = state.transactions.filter(
        (transaction) => transaction.key !== action.transaction.key
      );
      let parsedVal = parseFloat(action.transaction.value);
      if (action.transaction.sign === "+") {
        updatedBalance -= parsedVal;
      }
      if (action.transaction.sign === "-") {
        updatedBalance += parsedVal;
      }

      break;
    case "edit":
      updatedTransactions = state.transactions.map((transaction) => {
        let newTransaction = transaction;
        if (transaction.key === action.transaction.key) {
          newTransaction = {
            ...action.transaction,
            userID: transaction.userID,
          };

          if (transaction.value !== action.transaction.value) {
            let parsedVal = parseFloat(action.transaction.value);
            if (action.transaction.sign === "+") {
              updatedBalance += parsedVal - transaction.value;
            }
            if (action.transaction.sign === "-") {
              updatedBalance -= parsedVal + transaction.value;
            }
          }
        }
        console.log("check", transaction);
        return newTransaction;
      });

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
  };

  return (
    <TransactionsContext.Provider value={transContext}>
      {props.children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsProvider;
