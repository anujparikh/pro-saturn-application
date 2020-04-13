import React, { FC, useEffect } from 'react';
import SearchSortAndFilter from '../../../../components/seach-and-filter';
import { SearchSortAndFilterPropTypes } from '../../../../components/seach-and-filter';
import './index.less';
import { Table, Tag, Card, Row, Col, Typography, Empty, Modal } from 'antd';
import columns from './table-columns';
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuestions } from '../../../../services/question/actions';
import AddQuestion from '../add-question';
import { IQuestionModel } from '../../../../services/question/interfaces';

type QuestionsListProps = {
  showModalFlag: boolean;
  setShowModalFlag: Function;
};

const QuestionsList: FC<QuestionsListProps> = (props) => {
  const { showModalFlag, setShowModalFlag } = props;
  const dispatch = useDispatch();
  const questionsData = useSelector((state: any) => state.questions.questions);
  const isLoading = useSelector((state: any) => state.questions.isLoading);

  const categories: any = {};
  questionsData.forEach((question: IQuestionModel) => {
    question.categories.forEach((c) => {
      if (Object.keys(categories).includes(c)) {
        categories[c]++;
      } else {
        categories[c] = 1;
      }
    });
  });

  useEffect(() => {
    dispatch(getAllQuestions());
  }, [dispatch]);

  const searchSortAndFilterProps: SearchSortAndFilterPropTypes = {
    searchPlaceholder: 'search questions',
    showFilter: false,
  };
  return (
    <div className="questions-list-container">
      <Modal
        title="Add Question"
        visible={showModalFlag}
        width={'80%'}
        centered
        closable={false}
        footer={null}
      >
        <AddQuestion setShowModalFlag={setShowModalFlag}></AddQuestion>
      </Modal>
      <Card>
        <Row align="middle">
          <Col span={12}>
            <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
          </Col>
          <Col span={12}>
            <Row align="middle">
              <Col span={2}>
                <Typography.Text strong>Categories</Typography.Text>
              </Col>
              <Col className="questions-category-tag-container" span={21} offset={1}>
                {Object.keys(categories).map((k: string) => (
                  <Tag key={k} className="questions-category-tag" color="blue">
                    {k} <span className="question-frequency">{categories[k]}</span>
                  </Tag>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className="template-table-card">
        <Table
          loading={isLoading}
          size="small"
          pagination={{ pageSize: 15 }}
          columns={columns.map((c) => ({
            ...c,
            ellipsis: true,
          }))}
          locale={{ emptyText: <Empty></Empty> }}
          dataSource={questionsData.length !== 0 ? questionsData : false}
        ></Table>
      </Card>
    </div>
  );
};

export default QuestionsList;
