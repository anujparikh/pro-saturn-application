import React, { FC } from 'react';
import './index.less';
import QuestionsList from '../../../../containers/QuestionsList';

const DisplayComponent: FC<any> = (props: any) => {
  return <QuestionsList {...props}></QuestionsList>;
};

export default DisplayComponent;
