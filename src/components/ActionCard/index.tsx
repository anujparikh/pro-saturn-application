import React, { FC } from 'react';
import { Row, Typography, Table, Avatar, Card } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { grey } from '@ant-design/colors';
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
const ActionCard: FC<ActionCardPropTypes> = ({ title, columns, data }) => {
  const { Text } = Typography;
  return (
    <Card className="action-card" size="small">
      <Row className="feedback-header" justify="space-between">
        <Text strong>{title}</Text>
        <Avatar
          style={{ width: 25, height: 25, lineHeight: '25px', backgroundColor: grey[0] }}
          icon={<MoreOutlined />}
        />
      </Row>
      <div className="feedback-table">
        <Table
          tableLayout="fixed"
          columns={columns.map((c) => ({
            ...c,
            align: 'center',
            ellipsis: true,
            className: 'feedback-table',
          }))}
          size="small"
          dataSource={data}
          pagination={false}
          bordered={false}
        ></Table>
      </div>
    </Card>
  );
};

export default ActionCard;
