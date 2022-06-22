import axios from "axios";
import { API_URL } from "../helpers/functions/http";
export const addCategory = async (inputValues) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/addCategory.php",
    params: { ...inputValues },
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

export const deleteCategory = async (categoryId) => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "admin/deleteCategory.php",
    params: { categoryId: categoryId },
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

export const editCategory = async (category) => {
  console.log(category);
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/admin/editCategory.php",
    params: { ...category },
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
const getCategories = async () => {
  axios.defaults.baseURL = API_URL;
  const params = {
    method: "GET",
    url: "/getAllCategories.php",
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
export const getAllCategories = async () => {
  const fetchedData = await getCategories();

  if (fetchedData.length > 0) {
    const formattedData = fetchedData.map((category) => {
      return { ...category, key: category.id };
    });
    return formattedData;
  }
};
