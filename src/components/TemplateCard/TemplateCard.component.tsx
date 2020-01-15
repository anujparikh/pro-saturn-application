import React from 'react';
import { Card, Icon, Row, Col, Typography, Divider, Tag } from 'antd';
import './TemplateCard.component.less';
import TemplateInfoDisplay from '../TemplateInfoDisplay/TemplateInfoDisplay.component';

//TODO: Add props to TemplateCard component to be reusable across project
//TODO: Convert Tag to reusable component with props
// Make Open icon a reusable Icon component
const TemplateCard: React.FC = () => {
  const { Text } = Typography;
  return (
    <Card
      className="template-card"
      size="small"
      title="Senior Software Engineer"
      extra={<Icon type="login" />}
    >
      <Row>
        <Col span={8}>
          <TemplateInfoDisplay count={8} text="used for interviews"></TemplateInfoDisplay>
        </Col>
        <Col span={8}>
          <TemplateInfoDisplay count={1} text="duration (hrs)"></TemplateInfoDisplay>
        </Col>
        <Col span={8}>
          <TemplateInfoDisplay count={3} text="categories"></TemplateInfoDisplay>
        </Col>
      </Row>
      <Divider className="template-divider"></Divider>
      <Row>
        <Col span={4}>
          <Text className="template-sub-heading" strong>
            Categories
          </Text>
        </Col>
        <Col span={19} offset={1}>
          <Tag className="template-categories-tag">Architecture</Tag>
          <Tag className="template-categories-tag">Frontend</Tag>
          <Tag className="template-categories-tag">Backend</Tag>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Text className="template-sub-heading" strong>
            Tags
          </Text>
        </Col>
        <Col span={19} offset={1}>
          <Tag className="template-categories-tag">Senior</Tag>
          <Tag className="template-categories-tag">Microservices</Tag>
          <Tag className="template-categories-tag">Technical</Tag>
          <Tag className="template-categories-tag">React</Tag>
          <Tag className="template-categories-tag">Typescript</Tag>
        </Col>
      </Row>
    </Card>
  );
};

export default TemplateCard;
