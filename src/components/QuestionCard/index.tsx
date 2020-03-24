import React, { FC } from 'react';
import { Card, Row, Typography } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './index.less';

export type QuestionCardPropTypes = {
  title: string;
  questions: string[];
};

//TODO: On hover of ellipses show whole text
const QuestionCard: FC<QuestionCardPropTypes> = (props) => {
  const { title, questions } = props;
  const { Text } = Typography;
  return (
    <Card size="small" className="question-card">
      <Row justify="space-between">
        <Text strong>{title}</Text>
        <LoginOutlined />
      </Row>
      <Row>
        {questions.map((q) => (
          <Text key={q} className="question-text" ellipsis>
            {q}
          </Text>
        ))}
      </Row>
    </Card>
  );
};

export default QuestionCard;
