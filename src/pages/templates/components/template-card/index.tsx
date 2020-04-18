import React, { FC } from 'react';
import './index.less';
import { Card, Row, Col, Tag, Badge, Typography, Divider } from 'antd';
import { HeartOutlined, ShareAltOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons';

type TemplateCardProps = {
  title: string;
  duration: number;
  description: string;
  categories: string[];
  roles: string[];
  lastUpdatedAt: string;
};

type ActionButtonsProps = {
  lastUpdatedAt: string;
};

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  const { lastUpdatedAt } = props;
  const { Text } = Typography;
  return (
    <Row gutter={6} justify="space-between">
      <Col>
        <Text type="secondary">Last modified: {lastUpdatedAt}</Text>
      </Col>
    </Row>
  );
};

const TemplateCard: FC<TemplateCardProps> = (props) => {
  const { title, duration, description, categories, roles, lastUpdatedAt } = props;
  const { Text, Paragraph } = Typography;
  const badgeStyles = {
    backgroundColor: '#f5f5f5',
    color: 'black',
    fontSize: '0.5rem',
    minWidth: 14,
    height: 14,
    padding: '0 4px',
    lineHeight: '14px',
    borderRadius: 7,
  };
  return (
    <Card
      hoverable
      style={{ backgroundColor: '#f9f9f9', padding: 0 }}
      size="small"
      title={title}
      extra={<ActionButtons lastUpdatedAt={lastUpdatedAt}></ActionButtons>}
      actions={[
        <CopyOutlined></CopyOutlined>,
        <HeartOutlined></HeartOutlined>,
        <ShareAltOutlined></ShareAltOutlined>,
        <DeleteOutlined></DeleteOutlined>,
      ]}
    >
      <Row justify="start">
        <Col span={7} style={{ marginTop: 1 }}>
          <Text strong>Question Categories:</Text>
        </Col>
        <Col span={17}>
          {categories.map((c) => (
            <Badge style={badgeStyles} offset={[-8, 2]} count={4}>
              <Tag style={{ borderRadius: 10 }}>{c}</Tag>
            </Badge>
          ))}
        </Col>
      </Row>
      <Divider style={{ margin: '10px 0' }}></Divider>
      <Row justify="start">
        <Col span={7} style={{ marginTop: 1 }}>
          <Text strong>Associated Roles:</Text>
        </Col>
        <Col span={17}>
          {roles.map((r) => (
            <Tag style={{ borderRadius: 10 }}>{r}</Tag>
          ))}
        </Col>
      </Row>
      <Divider style={{ margin: '10px 0' }}></Divider>
      <Row justify="start">
        <Col span={7} style={{ marginTop: 1 }}>
          <Text strong>Duration:</Text>
        </Col>
        <Col span={17}>
          <Text>{duration / 60} hrs</Text>
        </Col>
        <Col span={7} style={{ marginTop: 1 }}>
          <Text strong>Recent Interviews:</Text>
        </Col>
        <Col span={17}>
          <Text>None</Text>
        </Col>
      </Row>
      <Row style={{ marginTop: 2 }} justify="start" gutter={5}>
        <Col span={7}>
          <Text strong>Description:</Text>
        </Col>
        <Col span={17}>
          <Paragraph ellipsis={{ rows: 2, expandable: true }}>{description}</Paragraph>
        </Col>
      </Row>
    </Card>
  );
};

export default TemplateCard;
