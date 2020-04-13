import React, { FC } from 'react';
import { Card, Row, Col } from 'antd';
import ActionCard from '../../../../components/action-card';
import columns from './table-columns';
import './index.less';
import { useSelector } from 'react-redux';
import { IInterviewModel } from '../../../../services/interview/interfaces';

const ActionsCategory: FC = () => {
  const interviews: IInterviewModel[] = useSelector((state: any) => state.interviews.interviews);
  return (
    <Card className="actions-category" size="small">
      <Row>
        {columns.map((column) => {
          return (
            <Col key={column.type} xl={{ span: 12 }} sm={{ span: 24 }}>
              <ActionCard
                title={column.type === 'upcoming' ? 'Upcoming Interviews' : 'Pending Feedback'}
                columns={column.columns}
                data={interviews}
              ></ActionCard>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default ActionsCategory;
