import React from 'react';
import { Row, Typography, Icon, Table } from 'antd';
import './InterviewCard.component.less';

//TODO: On hover of ellipses show whole text
//TODO: Make a reusable component for both feedback and interviews
const TemplateCard: React.FC = () => {
  const { Text } = Typography;
  const columns = [
    {
      title: 'Cadidate Name',
      dataIndex: 'name',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
    {
      title: 'Date - Time',
      dataIndex: 'dateTime',
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
    },
    {
      title: '# Categories',
      dataIndex: 'noOfCategories',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Anuj Parikh',
      role: 'Software Engineer',
      dateTime: '15 Jan - 01:00 PM',
      duration: '1hr',
      noOfCategories: 3,
    },
    {
      key: '2',
      name: 'Palak Parikh',
      role: 'Senior Software Engineer',
      dateTime: '15 Jan - 09:00 AM',
      duration: '1.5hr',
      noOfCategories: 5,
    },
    {
      key: '3',
      name: 'Arya Parikh',
      role: 'Engineering Manager',
      dateTime: '15 Jan - 03:00 PM',
      duration: '1hr',
      noOfCategories: 4,
    },
    {
      key: '4',
      name: 'Anuj Parikh',
      role: 'Software Engineer',
      dateTime: '15 Jan - 01:00 PM',
      duration: '1hr',
      noOfCategories: 3,
    },
    {
      key: '5',
      name: 'Palak Parikh',
      role: 'Senior Software Engineer',
      dateTime: '16 Jan - 09:00 AM',
      duration: '1.5hr',
      noOfCategories: 5,
    },
  ];
  return (
    <div className="template-card">
      <Row className="feedback-header" type="flex" justify="space-between">
        <Text strong>Upcoming Interviews</Text>
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
