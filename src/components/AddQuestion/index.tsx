import React, { FC } from 'react';
import { Tabs, Card, Form, Input, Row, Col, Select, Radio } from 'antd';
import './index.less';
import { categories } from './dummy';
const AddQuestion: FC = () => {
  const { TabPane } = Tabs;
  const { Item } = Form;
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <Card className="add-question-card" bodyStyle={{ paddingBottom: 0, paddingTop: '0.4rem' }}>
      <Form>
        <Tabs>
          <TabPane className="add-question-content" tab="Question" key="1">
            <Row>
              <Col span={8}>
                <Item>
                  <Input placeholder="Title for question"></Input>
                </Item>
              </Col>
              <Col span={15} offset={1}>
                <Item>
                  <Select placeholder="Categories" mode="tags" tokenSeparators={[',']}>
                    {categories.map((c) => (
                      <Option key={c.name}>{c.name}</Option>
                    ))}
                  </Select>
                  ,
                </Item>
              </Col>
            </Row>
            <Row type="flex" align="top">
              <Col span={15}>
                <Item>
                  <TextArea rows={4} placeholder="Question (supports markdown)"></TextArea>
                </Item>
              </Col>
              <Col span={8} offset={1}>
                <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">Easy</Radio.Button>
                  <Radio.Button value="b">Medium</Radio.Button>
                  <Radio.Button value="c">Hard</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </TabPane>
          <TabPane className="add-question-content" tab="Solution" key="2">
            <Item>
              <TextArea
                rows={4}
                autoSize={{ minRows: 4, maxRows: 10 }}
                placeholder="Solution (supports markdown)"
              ></TextArea>
            </Item>
          </TabPane>
        </Tabs>
      </Form>
    </Card>
  );
};

export default AddQuestion;
