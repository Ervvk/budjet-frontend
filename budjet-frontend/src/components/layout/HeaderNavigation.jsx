import React from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  const userName = "Test User";
  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        <Menu.Item key={"home"}>Portfel</Menu.Item>
        <Menu.Item key={"transac"}>Transakcje</Menu.Item>
        <Menu.Item key={"cat"}>Kategorie</Menu.Item>
        <Menu.Item key={"users"}>Użytkownicy</Menu.Item>
      </Menu>
      <span className="header-username">Hello, {userName}</span>
      <Button
        type="default"
        shape="circle"
        className="avatar-success"
        data-cy="user-settings"
      >
        <PoweroffOutlined />
      </Button>
    </div>
  );
};

export default HeaderNavigation;
