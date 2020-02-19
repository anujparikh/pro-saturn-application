import React, { FC } from 'react';
import { Tabs, Card, Form, Input, Row, Col, Select, Radio, Button } from 'antd';
import './index.less';
import { categories } from './dummy';
import { connect } from 'react-redux';
import { IQuestionModel, DifficultyLevels } from '../../services/Question/interfaces';
import { addUnsavedQuestion } from '../../services/Question/actions';
import { FormComponentProps } from 'antd/es/form';

export interface AddQuestionProps extends FormComponentProps {
  showSubmitButtons?: boolean;
}

const AddQuestion: FC<AddQuestionProps> = (props: any) => {
  const { showSubmitButtons, addUnsavedQuestion } = props;
  const { TabPane } = Tabs;
  const { Item } = Form;
  const { TextArea } = Input;
  const { Option } = Select;

  const unsavedQuestion: IQuestionModel = {
    id: 234,
    title: 'Foo',
    question: 'FooBar',
    difficultyLevel: DifficultyLevels.Easy,
    categories: ['Frontend', 'React'],
    frequency: 0,
  };

  const addQuestion = (e: any) => {
    e.preventDefault();
    addUnsavedQuestion(unsavedQuestion);
  };

  return (
    <Form onSubmit={addQuestion}>
      <Card className="add-question-card" bodyStyle={{ paddingBottom: 0, paddingTop: '0.4rem' }}>
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
      </Card>
      {showSubmitButtons && (
        <Row className="add-questions-button-group" type="flex" justify="space-between">
          <Col>
            <Button htmlType="submit">Add more questions</Button>
          </Col>
          <Col>
            <Button type="primary">Save Questions</Button>
          </Col>
        </Row>
      )}
    </Form>
  );
};

AddQuestion.defaultProps = {
  showSubmitButtons: true,
};

const mapDispatchToProps = (dispatch: any) => ({
  addUnsavedQuestion: (question: IQuestionModel) => dispatch(addUnsavedQuestion(question)),
});
const connectedAddQuestion = connect(null, mapDispatchToProps)(AddQuestion);

export default Form.create<AddQuestionProps>({ name: 'addQuesiton' })(connectedAddQuestion);
