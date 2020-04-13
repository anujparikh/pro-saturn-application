import React, { FC } from 'react';
import './index.less';
import QuestionsList from '../../components/questions-list';

const DisplayComponent: FC<any> = (props: any) => {
  return <QuestionsList {...props}></QuestionsList>;
};

export default DisplayComponent;
