import React, { FC } from 'react';
import { Card, Row, Col, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import QuestionCard from '../../components/QuestionCard';
import dummy from './dummy';
import './index.less';

interface CategoryNavigation {
  text: string;
  href?: string;
}

export type QuestionCategoryPropTypes = {
  title: string;
  navigation?: CategoryNavigation;
};

const QuestionCategory: FC<QuestionCategoryPropTypes> = (props) => {
  const catergories = dummy;
  const { title, navigation } = props;

  return (
    <Card className="question-category" size="small">
      <Row type="flex" justify="space-between">
        <Col>
          <Text strong>{title}</Text>
        </Col>
        {navigation && (
          <Col>
            <Button size="small" type="link" href={navigation.href}>
              <Text type="secondary">{navigation.text}</Text>
            </Button>
          </Col>
        )}
      </Row>
      <Row>
        {catergories.map((t) => {
          return (
            <Col key={t.id} xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
              <QuestionCard title={t.title} questions={t.questions}></QuestionCard>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default QuestionCategory;
