import React, { FC } from 'react';
import { Card, List, Row, Typography } from 'antd';
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
        <List
          size="small"
          split={false}
          dataSource={questions}
          renderItem={(item) => (
            <List.Item className="no-padding">
              <Text ellipsis>{item}</Text>
            </List.Item>
          )}
        />
      </Row>
    </Card>
  );
};

export default QuestionCard;
