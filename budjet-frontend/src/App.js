import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./App.less";
import "./App.module.less";
import { Layout } from "antd";
import Header from "./components/layout/Header";
import Pages from "./pages/Pages";
import TransactionsProvider from "./state/TransactionsProvider";
import { AuthContext } from "./state/auth/authContext";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({
    role: "",
    name: "",
    surname: "",
  });

  const handleLogin = useCallback(
    (loginPayload) => {
      setIsLoggedIn(true);
      setLoggedUser({
        ...loginPayload,
        role: "user",
        name: "Stefan",
        surname: "Mittwoch",
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
