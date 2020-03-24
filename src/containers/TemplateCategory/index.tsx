import React, { FC } from 'react';
import { Card, Row, Col, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import TemplateCard from '../../components/TemplateCard';
import dummy from './dummy';
import './index.less';

interface CategoryNavigation {
  text: string;
  href?: string;
}

export type TemplateCategoryPropTypes = {
  title: string;
  navigation?: CategoryNavigation;
};

const TemplateCategory: FC<TemplateCategoryPropTypes> = (props) => {
  const templates = dummy;
  const { title, navigation } = props;

  return (
    <Card className="template-category" size="small">
      <Row justify="space-between">
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
        {templates.map((t) => {
          return (
            <Col key={t.id} xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
              <TemplateCard
                title={t.title}
                templateInfo={t.templateInfo}
                contentData={t.contentData}
              ></TemplateCard>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default TemplateCategory;
