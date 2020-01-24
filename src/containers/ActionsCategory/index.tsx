import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import Text from 'antd/lib/typography/Text';
import ActionCard from '../../r-components/ActionCard';
import dummy from './dummy';
import './index.less';

interface CategoryNavigation {
  text: string;
  href?: string;
}

export type ActionsCategoryPropTypes = {
  title?: string;
  navigation?: CategoryNavigation;
};

const ActionsCategory: React.FC<ActionsCategoryPropTypes> = (props) => {
  const actionsData = dummy;
  const { title, navigation } = props;

  return (
    <Card size="small">
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
        {actionsData.map((a) => {
          return (
            <Col key={a.type} xl={{ span: 12 }} sm={{ span: 24 }}>
              <ActionCard title={a.title} columns={a.columns} data={a.data}></ActionCard>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default ActionsCategory;
