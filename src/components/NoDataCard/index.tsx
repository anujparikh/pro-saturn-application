import React, { FC } from 'react';
import { Card, Empty } from 'antd';
import './index.less';

export type NoDataCardProps = {
  description: string;
};

const NoDataCard: FC<NoDataCardProps> = (props) => {
  const { description } = props;
  return (
    <Card className="no-data-card" size="small">
      <Empty description={description}></Empty>
    </Card>
  );
};

export default NoDataCard;
