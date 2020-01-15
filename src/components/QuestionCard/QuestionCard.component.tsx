import React from 'react';
import { Card, List, Row, Typography, Icon } from 'antd';
import './QuestionCard.component.less';

//TODO: On hover of ellipses show whole text
const TemplateCard: React.FC = () => {
  const { Text } = Typography;
  const data = [
    'What are the various operations that can be performed on different Data Structures?',
    'How is an Array different from Linked List?',
    'What is Stack and where it can be used?',
    'What is a Queue, how it is different from stack and how is it implemented? Can we do the Queue implementation with Java?',
    'Which data structures are used for BFS and DFS of a graph?',
  ];
  return (
    <Card size="small" className="template-card">
      <Row type="flex" justify="space-between">
        <Text strong>Datastructure</Text>
        <Icon type="login" />
      </Row>

      <Row>
        <List
          size="small"
          split={false}
          dataSource={data}
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
