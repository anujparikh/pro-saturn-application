import React, { FC } from 'react';
import { Form, Input, Row, Col, Select, Radio, Button, Divider } from 'antd';
import './index.less';
import { categories } from './dummy';
import { DifficultyLevels, IQuestionModel } from '../../services/Question/interfaces';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addQuestion } from '../../services/Question/actions';

type AddQuestionProps = {
  setShowModalFlag: Function;
};

const AddQuestion: FC<AddQuestionProps> = (props) => {
  const [form] = Form.useForm();
  const { setShowModalFlag } = props;
  const { Item } = Form;
  const { TextArea } = Input;
  const { Option } = Select;
  const dispatch = useDispatch();

  const saveQuestion = (values: any) => {
    const { title, question, difficultyLevel, categories } = values;
    const inputQuestion: IQuestionModel = {
      id: uuid(),
      key: uuid(),
      title,
      question,
      difficultyLevel,
      categories,
      frequency: 0,
    };
    dispatch(addQuestion(inputQuestion));
  };

  const onFinish = (values: any) => {
    saveQuestion(values);
    setShowModalFlag(false);
  };

  const addMultipleQuestion = () => {
    saveQuestion(form.getFieldsValue());
    setShowModalFlag(true);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row>
        <Col span={15}>
          <Item name="title" rules={[{ required: true, message: 'Please input the title' }]}>
            <Input placeholder="Title for question"></Input>
          </Item>
        </Col>
        <Col span={8} offset={1}>
          <Item
            name="difficultyLevel"
            rules={[{ required: true, message: 'Please choose difficulty level' }]}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={DifficultyLevels.Easy}>{DifficultyLevels.Easy}</Radio.Button>
              <Radio.Button value={DifficultyLevels.Medium}>{DifficultyLevels.Medium}</Radio.Button>
              <Radio.Button value={DifficultyLevels.Hard}>{DifficultyLevels.Hard}</Radio.Button>
            </Radio.Group>
          </Item>
        </Col>
      </Row>
      <Row>
        <Col span={15}>
          <Item
            name="categories"
            rules={[{ required: true, message: 'Please select atleast one category' }]}
          >
            <Select placeholder="Categories" mode="tags" tokenSeparators={[',']}>
              {categories.map((c) => (
                <Option value={c.name}>{c.name}</Option>
              ))}
            </Select>
          </Item>
        </Col>
      </Row>
      <Row align="top">
        <Col span={22}>
          <Item name="question" rules={[{ required: true, message: 'Please enter the question' }]}>
            <TextArea
              rows={4}
              autoSize={{ minRows: 4, maxRows: 10 }}
              placeholder="Question (supports markdown)"
            ></TextArea>
          </Item>
        </Col>
      </Row>
      <Row align="top">
        <Col span={22}>
          <Item name="solution" rules={[]}>
            <TextArea
              rows={4}
              autoSize={{ minRows: 4, maxRows: 10 }}
              placeholder="Solution (supports markdown)"
            ></TextArea>
          </Item>
        </Col>
      </Row>
      <Divider></Divider>
      <Row justify="space-between">
        <Col>
          <Button onClick={addMultipleQuestion}>Add Multiple</Button>
        </Col>
        <Col>
          <Row gutter={10}>
            <Col>
              <Button onClick={() => setShowModalFlag(false)}>Cancel</Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default AddQuestion;
