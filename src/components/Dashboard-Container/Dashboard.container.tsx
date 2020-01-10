import React from 'react';
import SideBar from '../SideBar/SideBar.component';
import Header from '../Header/Header.component';
import { Row, Col } from 'antd';

const DashboardContainer: React.FC = () => {
  return (
    <Row>
      <Col span={3}>
        <SideBar></SideBar>
      </Col>
      <Col span={21}>
        <Header></Header>
      </Col>
    </Row>
  );
};

export default DashboardContainer;
