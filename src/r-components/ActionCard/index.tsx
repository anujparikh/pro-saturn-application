import React from 'react';
import { Row, Typography, Icon, Table } from 'antd';
import './index.less';

type columnsType = {
  title: string;
  dataIndex: string;
};

export type ActionCardPropTypes = {
  title: string;
  columns: columnsType[];
  data: object[];
};

//TODO: On hover of ellipses show whole text
//TODO: Make a reusable component for both feedback and interviews
const ActionCard: React.FC<ActionCardPropTypes> = ({ title, columns, data }) => {
  const { Text } = Typography;
  return (
    <div className="action-card">
      <Row className="feedback-header" type="flex" justify="space-between">
        <Text strong>{title}</Text>
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

export default ActionCard;
