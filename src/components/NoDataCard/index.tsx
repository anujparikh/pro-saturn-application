import React, { FC } from 'react';
import { Empty } from 'antd';
import './index.less';

export type NoDataCardProps = {
  description: string;
};

const NoDataCard: FC<NoDataCardProps> = (props) => {
  const { description } = props;
  return (
    <div className="no-data-card">
      <Empty description={description}></Empty>
    </div>
  );
};

export default NoDataCard;
