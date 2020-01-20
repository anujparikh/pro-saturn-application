import React from 'react';
import SideBar from '../SideBar/SideBar.component';
import Header from '../../containers/Header';
import { Row, Col } from 'antd';
import Dashboard from '../Dashboard/Dashboard.component';

const DashboardContainer: React.FC = () => {
  return (
    <Row>
      <Col span={3}>
        <SideBar></SideBar>
      </Col>
      <Col span={21}>
        <Header></Header>
        <Dashboard></Dashboard>
      </Col>
    </Row>
  );
};

export default DashboardContainer;
