import React, { FC, useEffect } from 'react';
import SearchSortAndFilter from '../../components/SearchAndFilter';
import { SearchSortAndFilterPropTypes } from '../../components/SearchAndFilter';
import './index.less';
import { Table, Tag, Card, Row, Col, Typography, Empty, Modal } from 'antd';
import { categories } from './dummy';
import columns from './table-columns';
import { connect } from 'react-redux';
import { getAllQuestions } from '../../services/Question/actions';
import AddQuestion from '../../components/AddQuestion';

// TODO: set proper prop types for the component
const QuestionsList: FC = (props: any) => {
  const { questionsData, isLoading, getAllQuestions, showModalFlag, setShowModalFlag } = props;
  useEffect(() => {
    getAllQuestions();
  }, [getAllQuestions]);
  const searchSortAndFilterProps: SearchSortAndFilterPropTypes = {
    searchPlaceholder: 'search questions',
    filterPlaceholder: 'filter questions by categories',
  };
  const handleCancel = () => {
    setShowModalFlag(false);
  };
  return (
    <div className="questions-list-container">
      <Modal
        title="Add Question"
        visible={showModalFlag}
        onCancel={handleCancel}
        width={'80%'}
        centered
        closable={false}
      >
        <AddQuestion></AddQuestion>
      </Modal>
      <Card>
        <Row className="questions-search-filter">
          <Col span={24}>
            <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={2}>
            <Typography.Text strong>Categories</Typography.Text>
          </Col>
          <Col span={22}>
            {categories.map((c) => (
              <Tag key={c.name} className="questions-category-tag" color="blue">
                {c.name} <span className="question-frequency">{c.no}</span>
              </Tag>
            ))}
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

const mapStateToProps = (state: any) => {
  const {
    questions: { questions: questionsData, isLoading },
  } = state;
  return { questionsData, isLoading };
};

const mapDispatchToProps = (dispatch: any) => ({
  getAllQuestions: () => dispatch(getAllQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
