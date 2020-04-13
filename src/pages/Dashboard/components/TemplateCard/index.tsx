import React, { FC } from 'react';
import { Card, Row, Col, Typography, Divider, Tag } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import TemplateInfoDisplay from '../template-info-display';
import './index.less';

interface TemplateInfo {
  count: number;
  text: string;
}

interface ContentDisplay {
  title: string;
  contents?: string[];
  noContentMessage?: string;
}

export type TemplateCardPropTypes = {
  title: string;
  navigateTo?: string;
  templateInfo: TemplateInfo[];
  contentData: ContentDisplay[];
};

//TODO: Convert Tag to reusable component with props
// Make Open icon a reusable Icon component
const TemplateCard: FC<TemplateCardPropTypes> = (props) => {
  const { Text } = Typography;
  const { title, templateInfo, contentData } = props;
  return (
    <Card size="small" className="template-card" title={title} extra={<LoginOutlined />}>
      <Row>
        {templateInfo.map((info) => {
          return (
            <Col span={8} key={info.text}>
              <TemplateInfoDisplay count={info.count} text={info.text}></TemplateInfoDisplay>
            </Col>
          );
        })}
      </Row>
      <Divider className="template-divider"></Divider>
      {contentData.map((data) => {
        return (
          <Row key={data.title}>
            <Col span={4}>
              <Text className="template-sub-heading" strong>
                {data.title}
              </Text>
            </Col>
            <Col span={18} offset={2}>
              {data.contents && data.contents.map((c) => (
                <Tag className="template-categories-tag" key={c}>
                  {c}
                </Tag>
              ))}
            </Col>
          </Row>
        );
      })}
    </Card>
  );
};

export default TemplateCard;
