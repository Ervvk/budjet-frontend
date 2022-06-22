import axios from "axios";

import { API_URL } from "../helpers/functions/http";

export const getAllTransactions = async (userID, userRole) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url:
      userRole === "admin"
        ? "/shared/listAllTransactions.php"
        : "/shared/getAllUserTransactions.php",
    params: { userId: userID },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    const transactions = result.data;
    const transactionsWithKey = transactions.map((transaction) => {
      return {
        ...transaction,
        key: transaction.id,
        amount: parseFloat(transaction.amount),
      };
    });
    return transactionsWithKey;
  } catch (error) {
    return error;
  }
};
export const addTransaction = async (inputValues, userID) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url:
      inputValues.type === "income"
        ? "/user/addIncome.php"
        : "/user/addOutgoing.php",
    params: { ...inputValues, userId: userID },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const editTransaction = async (inputValues, userId) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/shared/editSingleTransaction.php",
    params: { ...inputValues, id: inputValues.key, userId },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const deleteTransaction = async (inputValues, userId) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/shared/deleteTransactions.php",
    params: { transactionId: inputValues.key, userId },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getUserWallet = async (userId) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/user/getUserBalance.php",
    params: { userId },
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await axios.request(params);
    return result.data;
  } catch (error) {
    return error;
  }
};
