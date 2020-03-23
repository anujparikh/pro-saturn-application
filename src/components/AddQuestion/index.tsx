import React, { FC } from 'react';
import { Tabs, Card, Form, Input, Row, Col, Select, Radio } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './index.less';
import { categories } from './dummy';
import { DifficultyLevels } from '../../services/Question/interfaces';

export type AddQuestionProps = {
  getFieldDecorator: Function;
};

const AddQuestion: FC<AddQuestionProps> = (props) => {
  const { getFieldDecorator } = props;
  const { TabPane } = Tabs;
  const { Item } = Form;
  const { TextArea } = Input;
  const { Option } = Select;

  return (
    <Card className="add-question-card" bodyStyle={{ paddingBottom: 0, paddingTop: '0.4rem' }}>
      <Tabs tabBarExtraContent={<PlusCircleOutlined style={{ fontSize: '20px' }} />}>
        <TabPane className="add-question-content" tab="Question" key="1">
          <Row>
            <Col span={8}>
              <Item>
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input the title',
                    },
                  ],
                })(<Input placeholder="Title for question"></Input>)}
              </Item>
            </Col>
            <Col span={15} offset={1}>
              <Item>
                {getFieldDecorator('categories', {
                  rules: [
                    {
                      required: true,
                      message: 'Please select atleast one category',
                    },
                  ],
                })(
                  <Select placeholder="Categories" mode="tags" tokenSeparators={[',']}>
                    {categories.map((c) => (
                      <Option key={c.name}>{c.name}</Option>
                    ))}
                  </Select>,
                )}
              </Item>
            </Col>
          </Row>
          <Row type="flex" align="top">
            <Col span={15}>
              <Item>
                {getFieldDecorator('question', {
                  rules: [],
                })(<TextArea rows={4} placeholder="Question (supports markdown)"></TextArea>)}
              </Item>
            </Col>
            <Col span={8} offset={1}>
              {getFieldDecorator('difficultyLevel', {
                initialValue: DifficultyLevels.Easy,
              })(
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value={DifficultyLevels.Easy}>{DifficultyLevels.Easy}</Radio.Button>
                  <Radio.Button value={DifficultyLevels.Medium}>
                    {DifficultyLevels.Medium}
                  </Radio.Button>
                  <Radio.Button value={DifficultyLevels.Hard}>{DifficultyLevels.Hard}</Radio.Button>
                </Radio.Group>,
              )}
            </Col>
          </Row>
        </TabPane>
        <TabPane className="add-question-content" tab="Solution" key="2">
          <Item>
            {getFieldDecorator('solution', {
              rules: [],
            })(
              <TextArea
                rows={4}
                autoSize={{ minRows: 4, maxRows: 10 }}
                placeholder="Solution (supports markdown)"
              ></TextArea>,
            )}
          </Item>
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default AddQuestion;
