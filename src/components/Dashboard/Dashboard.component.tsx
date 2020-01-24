import React from 'react';
import TemplateCategory from '../../containers/TemplateCategory';
import './Dashboard.component.less';
import QuestionCategory from '../../containers/QuestionCategory';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-content-div">
      <TemplateCategory
        title="Favorites templates"
        navigation={{ text: 'show more...' }}
      ></TemplateCategory>
      <QuestionCategory
        title="Top categories questions"
        navigation={{ text: 'show more...' }}
      ></QuestionCategory>
      {/* <Card size="small">
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
      </Card> */}
    </div>
  );
};

export default Dashboard;
