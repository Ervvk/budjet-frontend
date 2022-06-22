import React, { useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import Register from "./register/Register";
import Transactions from "./transactions/Transactions";
import Users from "./users/Users";
import UserSettings from "./userSettings/UserSettings";
import Categories from "./categories/Categories";
import Home from "./home/Home";
import Faq from "./faq/Faq";

import { AuthContext } from "../state/auth/authContext";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const Pages = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="faq" element={<Faq />} />
      <Route
        element={
          <ProtectedRoute
            isAllowed={
              authCtx.isLoggedIn && authCtx.loggedUser?.role === "admin"
            }
          />
        }
      >
        <Route path="categories" element={<Categories />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route
        element={
          <ProtectedRoute
            isAllowed={
              authCtx.isLoggedIn && authCtx.loggedUser?.role === "user"
            }
          />
        }
      >
        {" "}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="userSettings" element={<UserSettings />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={authCtx.isLoggedIn} />}>
        <Route path="/" element={<Home />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default Pages;
