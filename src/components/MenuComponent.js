import React from 'react';
import styles from './MenuComponent.css';
import { Link } from 'dva/router';

import { Menu, Icon } from 'antd';

function MenuComponent(props) {
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  const MenuItem = Menu.Item;

  const handleClick = e => {
    props.dispatch({type:'indexPage/handleClickMenu', selected: e.key});
  }

  return (
    <div className={styles.normal}>
      <Menu onClick={ handleClick } selectedKeys={ [props.selected] }
        mode="horizontal">
        <MenuItem key="index">
          <Link to="/">首页</Link>
        </MenuItem>
        <MenuItem key="clothes-store">
          <Link to="/clothes-store">服装选租</Link>
        </MenuItem>
        <SubMenu title="增值服务">
          <MenuItemGroup title="化妆造型">
            <MenuItem key="service-marry">
              <Link to="/service">婚庆化妆</Link>
            </MenuItem>
            <MenuItem key="service-act">演出化妆</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="送货">
            <MenuItem key="service-cumbersome">重的</MenuItem>
            <MenuItem key="service-light">轻的</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem key="customer-show">
          <Link to="/customer-show">客户展示</Link>
        </MenuItem>
        <MenuItem key="about-us">
          <Link to="/about-us">关于我们</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

// this is a presentational component.

export default MenuComponent;
