import React, { FC } from 'react';
import './index.less';
import AddQuestion from '../../components/AddQuestion';
import { Row, Col, Button } from 'antd';

const AddQuestions: FC = () => {
  return (
    <div className="add-questions-container">
      <AddQuestion></AddQuestion>
      <AddQuestion></AddQuestion>
      <Row className="add-questions-button-group" type="flex" justify="space-between">
        <Col>
          <Button>Add more questions</Button>
        </Col>
        <Col>
          <Button type="primary">Save Questions</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddQuestions;
