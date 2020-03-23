import React, { FC } from 'react';
import { Form } from 'antd';
import './index.less';
import { connect } from 'react-redux';
import { IQuestionModel, DifficultyLevels } from '../../services/Question/interfaces';
import { addUnsavedQuestion } from '../../services/Question/actions';
import { FormComponentProps } from 'antd/es/form';
import AddQuestionComponent from '../../components/AddQuestion';

export interface AddQuestionProps extends FormComponentProps {
  showSubmitButtons?: boolean;
}

const AddQuestion: FC<AddQuestionProps> = (props: any) => {
  const { addUnsavedQuestion } = props;
  const { getFieldDecorator } = props.form;

  const unsavedQuestion: IQuestionModel = {
    id: 234,
    key: Math.random() * 100,
    title: 'Foo',
    question: 'FooBar',
    difficultyLevel: DifficultyLevels.Easy,
    categories: ['Frontend', 'React'],
    frequency: 0,
  };

  const addQuestion = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
        addUnsavedQuestion(unsavedQuestion);
      }
    });
  };

  return (
    <Form onSubmit={addQuestion}>
      <AddQuestionComponent getFieldDecorator={getFieldDecorator}></AddQuestionComponent>
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
