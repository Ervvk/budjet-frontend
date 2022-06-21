import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./App.less";
import "./App.module.less";
import { Layout } from "antd";
import Header from "./components/layout/Header";
import Pages from "./pages/Pages";
import TransactionsProvider from "./state/TransactionsProvider";
import { AuthContext } from "./state/auth/authContext";

import { useAxios } from "./helpers/hooks/use-http";
function App() {
  /*
  const { response, loading, error } = useAxios({
    method: "GET",
    url: "/admin/getAllUsersSorted.php",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  */

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    role: "",
    name: "",
    surname: "",
  });

  const handleLogin = useCallback(
    (loginPayload) => {
      console.log(loginPayload);
      setIsLoggedIn(true);
      setLoggedUser({
        ...loginPayload,
        role: "user",
      });
      navigate("/", { replace: true });
    },
    [navigate]
  );

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setLoggedUser({ role: "", name: "" });
  }, []);

  const authValues = {
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    loggedUser: loggedUser,
    logout: handleLogout,
  };

  const { Content, Footer } = Layout;
  return (
    <AuthContext.Provider value={authValues}>
      <TransactionsProvider>
        <Layout className="layout">
          <Header></Header>
          <Content>{<Pages />}</Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>{" "}
      </TransactionsProvider>
    </AuthContext.Provider>
  );
}

export default App;
