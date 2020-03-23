import React, { FC } from 'react';
import './index.less';
import AddQuestion from '../AddQuestion';
import { connect } from 'react-redux';
import { Table, Empty, Card } from 'antd';
import columns from './table-columns';

const AddQuestions: FC = (props: any) => {
  const { unsavedQuestions } = props;

  return (
    <div className="add-questions-container">
      <AddQuestion></AddQuestion>
      <Card>
        <Table
          columns={columns}
          size="small"
          pagination={{ pageSize: 15 }}
          locale={{ emptyText: <Empty></Empty> }}
          dataSource={unsavedQuestions.length !== 0 ? unsavedQuestions : false}
        ></Table>
      </Card>
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
