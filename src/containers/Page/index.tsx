import React from 'react';
import SideBar from '../../components/SideBar/SideBar.component';
import Header from '../../containers/Header';
import { Row, Col } from 'antd';

export type PagePRPropTypes = {
  headerTitle: string;
  headerExtra: React.ReactNode;
  displayComponent?: React.ReactNode;
};

const Page: React.FC<PagePRPropTypes> = (props) => {
  const { headerTitle, headerExtra, displayComponent } = props;

  return (
    <Row>
      <Col span={3}>
        <SideBar></SideBar>
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
