import React, { FC } from 'react';
import SideBar, { SideBarPropTypes } from '../../components/side-bar';
import Header from '../header';
import { Row, Col } from 'antd';
import {
  DashboardOutlined,
  SnippetsOutlined,
  QuestionCircleOutlined,
  ReconciliationOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';

export type PagePRPropTypes = {
  headerTitle: string;
  headerExtra?: React.ReactNode;
  displayComponent?: React.ReactNode;
};

const Page: FC<PagePRPropTypes> = (props) => {
  const { headerTitle, headerExtra, displayComponent } = props;

  const sideBarProps: SideBarPropTypes = {
    menuItems: [
      {
        iconComponent: <DashboardOutlined />,
        title: 'Dashboard',
        route: '/dashboard',
      },
      {
        iconComponent: <SnippetsOutlined />,
        title: 'Templates',
        route: '/templates',
      },
      {
        iconComponent: <QuestionCircleOutlined />,
        title: 'Questions',
        route: '/questions',
      },
      {
        iconComponent: <ReconciliationOutlined />,
        title: 'Interviews',
        route: '/dashboard',
      },
      {
        iconComponent: <UsergroupAddOutlined />,
        title: 'Feedbacks',
        route: '/dashboard',
      },
    ],
  };

  return (
    <Row>
      <Col span={3}>
        <SideBar {...sideBarProps}></SideBar>
      </Col>
      <Col span={21}>
        <Header title={headerTitle} extra={headerExtra}></Header>
        {displayComponent}
      </Col>
    </Row>
  );
};

Page.defaultProps = {
  headerExtra: <></>,
  displayComponent: <></>,
};

export default Page;
