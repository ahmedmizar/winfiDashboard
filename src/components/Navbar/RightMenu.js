import React from 'react';
import { Menu, Grid } from 'antd';
import { Link } from 'react-router-dom';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import i18n from "../../i18n";

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <Link to="/Signin">{i18n.t("Login.UserName")}</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/Signup">Signup</Link>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;
