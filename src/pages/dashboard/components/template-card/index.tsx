import React, { FC } from 'react';
import { Card, Row, Col, Typography, Divider, Tag } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import TemplateInfoDisplay from '../template-info-display';
import './index.less';

export type TemplateCardPropTypes = {
  title: string;
  navigateTo?: string;
  noOfInterviews?: number;
  duration: number;
  categories?: string[];
  roles: string[];
};

//TODO: Convert Tag to reusable component with props
// Make Open icon a reusable Icon component
const TemplateCard: FC<TemplateCardPropTypes> = (props) => {
  const { Text } = Typography;
  const { title, noOfInterviews = 0, duration, categories = [], roles } = props;
  return (
    <Card size="small" className="template-card" title={title} extra={<LoginOutlined />}>
      <Row>
        <Col span={8}>
          <TemplateInfoDisplay
            count={noOfInterviews}
            text="used for interviews"
          ></TemplateInfoDisplay>
        </Col>
        <Col span={8}>
          <TemplateInfoDisplay count={duration / 60} text="duration (hrs)"></TemplateInfoDisplay>
        </Col>
        <Col span={8}>
          <TemplateInfoDisplay count={categories.length} text="categories"></TemplateInfoDisplay>
        </Col>
      </Row>
      <Divider className="template-divider"></Divider>

      <Row>
        <Col span={4}>
          <Text className="template-sub-heading" strong>
            Categories
          </Text>
        </Col>
        <Col span={18} offset={2}>
          {categories?.map((c) => (
            <Tag className="template-categories-tag" key={c}>
              {c}
            </Tag>
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Text className="template-sub-heading" strong>
            Roles
          </Text>
        </Col>
        <Col span={18} offset={2}>
          {roles?.map((c) => (
            <Tag className="template-categories-tag" key={c}>
              {c}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default TemplateCard;
