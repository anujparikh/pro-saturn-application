import React from 'react';
import { Row, Col, Typography } from 'antd';
import TemplateCard from '../TemplateCard/TemplateCard.component';
import './Dashboard.component.less';

const Dashboard: React.FC = () => {
  const { Text } = Typography;
  const templates = [1, 2, 3, 4];
  return (
    <div className="dashboard-content-div">
      <Row>
        <Col span={5}>
          <Text strong>Top used templates</Text>
        </Col>
        <Col span={2} offset={17}>
          <Text type="secondary">show more...</Text>
        </Col>
      </Row>
      <Row>
        {templates.map((t) => {
          return (
            <Col
              key={t}
              xl={{ span: 6 }}
              lg={{ span: 8 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
            >
              <TemplateCard></TemplateCard>
            </Col>
          );
        })}
      </Row>
      <Col span={5}>
        <Text strong>Top used questions</Text>
      </Col>
      <Col span={2} offset={17}>
        <Text type="secondary">show more...</Text>
      </Col>
      <Row>
        {templates.map((t) => {
          return (
            <Col
              key={t}
              xl={{ span: 6 }}
              lg={{ span: 8 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
            >
              <TemplateCard></TemplateCard>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>Interviews</Col>
      </Row>
      <Row type="flex" justify="end">
        <Col>show more...</Col>
      </Row>
      <Row>
        <Col>Feedbacks</Col>
      </Row>
      <Row type="flex" justify="end">
        <Col>show more...</Col>
      </Row>
    </div>
  );
};

export default Dashboard;
