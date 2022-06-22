import axios from "axios";
import { API_URL } from "../helpers/functions/http";

export const addUser = async (inputValues) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/addUserByAdmin.php",
    params: {
      ...inputValues,
      userId: "",
      active: inputValues.active ? "1" : "0",
    },
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
export const deleteUser = async (userID) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/deleteUser.php",
    params: { userId: userID },
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

export const editUser = async (inputValues) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/editUserDataByAdmin.php",
    params: {
      ...inputValues,
      userId: inputValues.key,
      active: inputValues.active ? "1" : "0",
    },
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
export const getAllUsers = async () => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/getAllUsersSorted.php",
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
