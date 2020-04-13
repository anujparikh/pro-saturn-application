import React, { FC } from 'react';
import { Typography, Row, Col } from 'antd';
import './styles.less';

export type TemplateInfoDisplayProps = {
  count: number;
  text: string;
};

const TemplateInfoDisplay: FC<TemplateInfoDisplayProps> = ({
  count,
  text,
}: TemplateInfoDisplayProps) => {
  const { Title, Text } = Typography;
  return (
    <>
      <Row justify="center">
        <Col>
          <Title className="template-info-display-count" level={1}>
            {count}
          </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Text className="template-info-display-text" type="secondary">
            {text}
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default TemplateInfoDisplay;
