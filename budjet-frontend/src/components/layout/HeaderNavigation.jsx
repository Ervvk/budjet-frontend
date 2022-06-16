import React, { useContext } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

import "./Header.module.less";
import "./Header.less";
import { AuthContext } from "../../state/auth/authContext";

const HeaderNavigation = () => {
  const authCtx = useContext(AuthContext);
  const loggedUser = authCtx.loggedUser;

  const handleLogout = () => {
    authCtx.logout();
  };
  return (
    <div className="header-navigation">
      <Menu mode="horizontal">
        {loggedUser.role === "admin" && (
          <>
            <Menu.Item key={"transac"}>
              <NavLink to={"transactions"}>Transakcje</NavLink>
            </Menu.Item>
            <Menu.Item key={"cat"}>
              <NavLink to={"categories"}>Kategorie</NavLink>
            </Menu.Item>
            <Menu.Item key={"users"}>
              <NavLink to={"users"}>Użytkownicy</NavLink>
            </Menu.Item>
          </>
        )}
        {loggedUser.role === "user" && (
          <>
            <Menu.Item key={"home"}>
              <NavLink to={"/dashboard"}>Portfel</NavLink>
            </Menu.Item>
            <Menu.Item key={"transac"}>
              <NavLink to={"transactions"}>Transakcje</NavLink>
            </Menu.Item>
          </>
        )}
      </Menu>
      {authCtx.isLoggedIn && (
        <>
          <span className="header-username">
            {`${loggedUser.name} ${loggedUser.surname}`}
          </span>

          <Button
            type="default"
            shape="circle"
            className="avatar-success"
            data-cy="user-settings"
            onClick={handleLogout}
          >
            <PoweroffOutlined />
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderNavigation;
