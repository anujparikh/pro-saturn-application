import React, { FC } from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Text from 'antd/lib/typography/Text';
import TemplateCard from '../../components/template-card';
import './index.less';
import { grey } from '@ant-design/colors';
import NoDataCard from '../../../../components/no-data-card';
import { ITemplateModel } from '../../../../services/template/interfaces';

interface CategoryNavigation {
  text: string;
  href?: string;
}

export type TemplateCategoryPropTypes = {
  title: string;
  navigation?: CategoryNavigation;
};

const TemplateCategory: FC<TemplateCategoryPropTypes> = (props) => {
  const { title, navigation } = props;
  const templates = useSelector((state: any) => state.templates.templates);
  const actionButtonStyle = { width: 25, height: 25, lineHeight: '25px', backgroundColor: grey[0] };
  return (
    <Card className="template-category" size="small">
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
        {templates.length > 0 ? (
          templates.map((t: ITemplateModel) => {
            return (
              <Col key={t.id} xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
                <TemplateCard
                  title={t.title}
                  noOfInterviews={t.interviews.length}
                  duration={t.duration}
                  categories={t.categories}
                  roles={t.roles}
                ></TemplateCard>
              </Col>
            );
          })
        ) : (
          <NoDataCard description="Templates not added"></NoDataCard>
        )}
      </Row>
    </Card>
  );
};

export default TemplateCategory;
