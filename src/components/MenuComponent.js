import React from 'react';
import styles from './MenuComponent.css';
import { Link } from 'dva/router';

import { Menu, Icon } from 'antd';

function MenuComponent(props) {
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;

  const handleClick = e => {
    props.dispatch({type:'indexPage/handleClickMenu', selected: e.key});
  }

  return (
    <div className={styles.normal}>
      <Menu
        onClick={ handleClick }
        selectedKeys={ [props.selected] }
        mode="horizontal">
        <Menu.Item key="index">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="clothes-store">
          <Link to="/clothes-store">服装选租</Link>
        </Menu.Item>
        <SubMenu title="增值服务">
          <MenuItemGroup title="化妆造型">
            <Menu.Item key="service-marry"><Link to="/service">婚庆化妆</Link></Menu.Item>
            <Menu.Item key="service-act">演出化妆</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="送货">
            <Menu.Item key="service-cumbersome">重的</Menu.Item>
            <Menu.Item key="service-light">轻的</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="customer-show">
          <Link to="/customer-show">客户展示</Link>
        </Menu.Item>
        <Menu.Item key="about-us">
          <Link to="/about-us">关于我们</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">登录</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

// this is a presentational component.

export default MenuComponent;
