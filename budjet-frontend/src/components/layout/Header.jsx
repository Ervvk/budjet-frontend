import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Space } from "antd";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiJetpack } from "react-icons/gi";

import "./Header.module.less";
//import "./Header.less";

import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const logo = (
    <div className={{ display: "flex" }}>
      <AiOutlineDollarCircle />
      <GiJetpack />
    </div>
  );

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <span>Budjet</span>
        <span style={{ display: "inline-block" }}>{logo}</span>{" "}
      </div>

      <Space direction="horizontal">
        <HeaderNavigation />
      </Space>
    </Header>
  );
};

export default Header;
