import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import QuestionCard from '../QuestionCard/QuestionCard.component';
import InterviewCard from '../InterviewCard/InterviewCard.component';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import TemplateCategory from '../../containers/TemplateCategory';
import './Dashboard.component.less';

const Dashboard: React.FC = () => {
  const { Text } = Typography;
  const categories = [1, 2, 3];
  return (
    <div className="dashboard-content-div">
      <TemplateCategory
        title="Top used templates"
        navigation={{ text: 'show more...' }}
      ></TemplateCategory>
      <Card className="dashboard-card" size="small">
        <Row>
          <Col span={5}>
            <Text strong>Top categories questions</Text>
          </Col>
          <Col span={2} offset={17}>
            <Text type="secondary">show more...</Text>
          </Col>
        </Row>

        <Row>
          {categories.map((c) => {
            return (
              <Col
                key={c}
                xl={{ span: 8 }}
                lg={{ span: 8 }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                <QuestionCard></QuestionCard>
              </Col>
            );
          })}
        </Row>
      </Card>
      <Card size="small">
        <Row type="flex" justify="space-between">
          <Col
            xl={{ span: 11 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <InterviewCard></InterviewCard>
          </Col>
          <Col
            xl={{ span: 12 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <FeedbackCard></FeedbackCard>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;
