import React from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

import "./Header.module.less";
import "./Header.less";

const HeaderNavigation = () => {
  const userName = "Jon User";
  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        <Menu.Item key={"home"}>
          <NavLink to={"/"}>Portfel</NavLink>
        </Menu.Item>
        <Menu.Item key={"transac"}>
          <NavLink to={"transactions"}>Transakcje</NavLink>
        </Menu.Item>
        <Menu.Item key={"cat"}>
          <NavLink to={"categories"}>Kategorie</NavLink>
        </Menu.Item>
        <Menu.Item key={"users"}>
          <NavLink to={"users"}>Użytkownicy</NavLink>
        </Menu.Item>
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
