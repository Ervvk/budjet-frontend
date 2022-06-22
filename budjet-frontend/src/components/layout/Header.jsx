import React from "react";
import { Layout, Space } from "antd";
import { GiJetpack } from "react-icons/gi";

import "./Header.module.less";
//import "./Header.less";

import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  const { Header } = Layout;

  const logo = (
    <div>
      <GiJetpack />
    </div>
  );

  return (
    <Header className="header">
      <div className="logo">
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
