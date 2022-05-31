import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import Register from "./register/Register";
import Transactions from "./transactions/Transactions";
import Users from "./users/Users";
import UserSettings from "./userSettings/UserSettings";
import Categories from "./categories/Categories";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="categories" element={<Categories />} />
      <Route path="users" element={<Users />} />
      <Route path="userSettings" element={<UserSettings />} />
    </Routes>
  );
};

export default routes;
