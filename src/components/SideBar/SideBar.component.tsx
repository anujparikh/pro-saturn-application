import React from 'react';
import { Menu, Icon, Row } from 'antd';
import './SideBar.component.less';
import Logo from '../Logo/Logo.component';
import ProfileMenu from '../ProfileMenu/ProfileMenu.component';

const SideBar: React.FC = () => {
  return (
    <div className="side-bar-container">
      <div>
        <Row type="flex" justify="center">
          <Logo></Logo>
        </Row>
        <Menu
          className="side-bar-sider-open"
          inlineCollapsed={false}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['4']}
        >
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span className="nav-text">Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="snippets" />
            <span className="nav-text">Templates</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="question-circle" />
            <span className="nav-text">Questions</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="usergroup-add" />
            <span className="nav-text">Feedbacks</span>
          </Menu.Item>
        </Menu>
      </div>
      <div className="side-bar-profile">
        <ProfileMenu></ProfileMenu>
      </div>
    </div>
  );
};

export default SideBar;
