import React, { FC, useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "./../../images/cryptocurrency.png";
import { MenuProps } from "rc-menu";

// Скопировал из документации Ant Design без понятия, как это работает. Вернуться
type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  group?: "group"
) => {
  return { label, key, icon, children, group } as MenuItem;
};

const items: MenuProps["items"] = [
  getItem(<Link to="/">Home</Link>, "home", <HomeOutlined />),
  getItem(
    <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    "cryptocurrencies",
    <FundOutlined />
  ),
  getItem(
    <Link to="/exchanges">Exchanges</Link>,
    "exchanges",
    <MoneyCollectOutlined />
  ),
  getItem(<Link to="/news">News</Link>, "news", <BulbOutlined />),
];

const { Title } = Typography;

const NavBar: FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Title level={2} className="logo">
          <Link to="/" style={{ whiteSpace: "nowrap" }}>
            Cryptoverse
          </Link>
        </Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(prev => !prev)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          defaultSelectedKeys={["home"]}
          mode="vertical"
          items={items}
        />
      )}
    </div>
  );
};

export default NavBar;
