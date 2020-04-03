import React, { FC } from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import QuestionCard from '../../components/QuestionCard';
import './index.less';
import { useSelector } from 'react-redux';
import { IQuestionModel } from '../../services/Question/interfaces';
import NoDataCard from '../../components/NoDataCard';
import { grey } from '@ant-design/colors';

interface CategoryNavigation {
  text: string;
  href?: string;
}

export type QuestionCategoryPropTypes = {
  title: string;
  navigation?: CategoryNavigation;
};

const QuestionCategory: FC<QuestionCategoryPropTypes> = (props) => {
  const actionButtonStyle = { width: 25, height: 25, lineHeight: '25px', backgroundColor: grey[0] };
  const { title, navigation } = props;
  const questions: IQuestionModel[] = useSelector((state: any) => state.questions.questions);
  const categories: any = {};
  questions.forEach((question) => {
    question.categories.forEach((c) => {
      if (Object.keys(categories).includes(c)) {
        categories[c].push(question);
      } else {
        categories[c] = [question];
      }
    });
  });

  return (
    <Card className="question-category" size="small">
      <Row justify="space-between">
        <Col>
          <Text strong>{title}</Text>
        </Col>
        {navigation && (
          <Col>
            <Row gutter={4}>
              <Col>
                <Avatar style={actionButtonStyle} icon={<PlusOutlined />} />
              </Col>
              <Col>
                <Avatar style={actionButtonStyle} icon={<MoreOutlined />} />
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      <Row>
        {categories.length > 0 ? (
          categories.map((t: any) => {
            return (
              <Col key={t.id} xl={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
                <QuestionCard title={t.title} questions={t.questions}></QuestionCard>
              </Col>
            );
          })
        ) : (
          <NoDataCard description="Questions not added"></NoDataCard>
        )}
        {}
      </Row>
    </Card>
  );
};

export default QuestionCategory;
