import React, { FC } from 'react';
import { Card, Row, Col } from 'antd';
import ActionCard from '../../components/ActionCard';
import dummy from './dummy';
import columns from './table-columns';
import './index.less';

const ActionsCategory: FC = () => {
  const actionsData = dummy;
  return (
    <Card size="small">
      <Row>
        {columns.map((column) => {
          const data = actionsData.find((a) => a.type === column.type);
          return (
            data && (
              <Col key={column.type} xl={{ span: 12 }} sm={{ span: 24 }}>
                <ActionCard
                  title={data.title}
                  columns={column.columns}
                  data={data.data}
                ></ActionCard>
              </Col>
            )
          );
        })}
      </Row>
    </Card>
  );
};

export default ActionsCategory;
