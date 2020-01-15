import React from 'react';
import { Card, List, Row, Typography, Icon, Table } from 'antd';
import './FeedbackCard.component.less';

//TODO: On hover of ellipses show whole text
//TODO: Make a reusable component for both feedback and interviews
const TemplateCard: React.FC = () => {
  const { Text } = Typography;
  const columns = [
    {
      title: 'Cadidate Name',
      dataIndex: 'name',
      width: '25%',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: '25%',
    },
    {
      title: 'Date - Time',
      dataIndex: 'dateTime',
      width: '25%',
    },
    {
      title: 'Overall Feedback',
      dataIndex: 'feedback',
      width: '25%',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Anuj Parikh',
      role: 'Software Engineer',
      dateTime: '15 Jan - 01:00 PM',
      feedback: true,
    },
    {
      key: '2',
      name: 'Palak Parikh',
      role: 'Senior Software Engineer',
      dateTime: '15 Jan - 09:00 AM',
      feedback: false,
    },
    {
      key: '3',
      name: 'Arya Parikh',
      role: 'Engineering Manager',
      dateTime: '15 Jan - 03:00 PM',
      feedback: true,
    },
    {
      key: '2',
      name: 'Palak Parikh',
      role: 'Senior Software Engineer',
      dateTime: '15 Jan - 09:00 AM',
      feedback: false,
    },
    {
      key: '3',
      name: 'Arya Parikh',
      role: 'Engineering Manager',
      dateTime: '15 Jan - 03:00 PM',
      feedback: true,
    },
  ];
  return (
    <div className="template-card">
      <Row className="feedback-header" type="flex" justify="space-between">
        <Text strong>Recent Feedbacks</Text>
        <Icon type="login" />
      </Row>
      <div className="feedback-table">
        <Table
          tableLayout="fixed"
          columns={columns.map((c) => ({ ...c, ellipsis: true, className: 'feedback-table' }))}
          size="small"
          dataSource={data}
          pagination={false}
          bordered={false}
        ></Table>
      </div>
    </div>
  );
};

export default TemplateCard;
