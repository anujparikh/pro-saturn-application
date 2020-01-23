import React from 'react';
import { Card, List, Row, Typography, Icon } from 'antd';
import './styles.less';

export type QuestionCardPropTypes = {
  title: string;
  questions: string[];
};

//TODO: On hover of ellipses show whole text
const TemplateCard: React.FC<QuestionCardPropTypes> = (props) => {
  const { title, questions } = props;
  const { Text } = Typography;
  return (
    <Card size="small" className="question-card">
      <Row type="flex" justify="space-between">
        <Text strong>{title}</Text>
        <Icon type="login" />
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

export default TemplateCard;
