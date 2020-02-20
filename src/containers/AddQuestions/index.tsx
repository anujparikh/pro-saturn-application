import React, { FC } from 'react';
import './index.less';
import AddQuestion from '../AddQuestion';
import { connect } from 'react-redux';

const AddQuestions: FC = (props: any) => {
  const { unsavedQuestions } = props;

  return (
    <div className="add-questions-container">
      {unsavedQuestions.map(() => (
        <AddQuestion showSubmitButtons={false}></AddQuestion>
      ))}
      <AddQuestion></AddQuestion>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const {
    questions: { unsavedQuestions },
  } = state;
  return { unsavedQuestions };
};

export default connect(mapStateToProps)(AddQuestions);
