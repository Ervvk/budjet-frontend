import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Space } from "antd";
import { GiJetpack } from "react-icons/gi";
import { AuthContext } from "../../state/auth/authContext";

import "./Header.module.less";
//import "./Header.less";

import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const logo = (
    <div>
      <GiJetpack />
    </div>
  );

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Header className="header">
      <div className="logo" onClick={authCtx.isLoggedIn && handleLogoClick}>
        <span>BudJet</span>
        <span style={{ display: "inline-block" }}>{logo}</span>{" "}
      </div>

      <Space direction="horizontal">
        <HeaderNavigation />
      </Space>
    </Header>
  );
};

export default Header;
