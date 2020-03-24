import React, { FC } from 'react';
import { Menu, Row } from 'antd';
import './index.less';
import Logo from '../Logo';
import ProfileMenu from '../ProfileMenu';

type menuItem = {
  iconComponent: any;
  title: string;
  route: string;
};

export type SideBarPropTypes = {
  menuItems?: Array<menuItem>;
};

const SideBar: FC<SideBarPropTypes> = ({ menuItems }) => {
  return (
    <div className="side-bar-container">
      <Row justify="center">
        <Logo></Logo>
      </Row>
      {menuItems && (
        <Menu className="side-bar-sider-open" inlineCollapsed={false} theme="light" mode="inline">
          {menuItems.map((item) => (
            <Menu.Item key={item.title}>
              <a href={item.route}>
                {item.iconComponent}
                <span className="nav-text">{item.title}</span>
              </a>
            </Menu.Item>
          ))}
        </Menu>
      )}

      <div className="side-bar-profile">
        <ProfileMenu showUserName userName="Anuj Parikh"></ProfileMenu>
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  menuItems: [],
};

export default SideBar;
