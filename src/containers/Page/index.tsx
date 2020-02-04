import React, { FC } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../containers/Header';
import { Row, Col } from 'antd';

export type PagePRPropTypes = {
  headerTitle: string;
  headerExtra: React.ReactNode;
  displayComponent?: React.ReactNode;
};

const Page: FC<PagePRPropTypes> = (props) => {
  const { headerTitle, headerExtra, displayComponent } = props;

  const sideBarProps = {
    menuItems: [
      {
        iconName: 'dashboard',
        title: 'Dashboard',
        route: '/dashboard',
      },
      {
        iconName: 'snippets',
        title: 'Templates',
        route: '/templates',
      },
      {
        iconName: 'question-circle',
        title: 'Questions',
        route: '/dashboard',
      },
      {
        iconName: 'reconciliation',
        title: 'Interviews',
        route: '/dashboard',
      },
      {
        iconName: 'usergroup-add',
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
