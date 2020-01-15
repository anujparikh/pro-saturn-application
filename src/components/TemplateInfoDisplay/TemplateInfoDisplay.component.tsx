import React from 'react';
import { Typography, Row, Col } from 'antd';
import './TemplateInfoDisplay.component.less';

type TemplateInfoDisplayProps = {
  count: number;
  text: string;
};

const TemplateInfoDisplay: React.FC<TemplateInfoDisplayProps> = ({
  count,
  text,
}: TemplateInfoDisplayProps) => {
  const { Title, Text } = Typography;
  return (
    <>
      <Row type="flex" justify="center">
        <Col>
          <Title className="template-info-display-count" level={1}>
            {count}
          </Title>
        </Col>
      </Row>
      <Row type="flex" justify="center">
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
