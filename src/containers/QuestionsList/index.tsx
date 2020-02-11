import React, { FC } from 'react';
import SearchSortAndFilter from '../../components/SearchAndFilter';
import { SearchSortAndFilterPropTypes } from '../../components/SearchAndFilter';
import './index.less';
import { Table, Tag, Card, Row, Col, Typography } from 'antd';
import { categories, questionsData } from './dummy';
import columns from './table-columns';
const QuestionsList: FC = () => {
  const searchSortAndFilterProps: SearchSortAndFilterPropTypes = {
    searchPlaceholder: 'search questions',
    filterPlaceholder: 'filter questions by categories',
  };
  return (
    <div className="questions-list-container">
      <Card>
        <Row className="questions-search-filter">
          <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
        </Row>
        <Row type="flex" justify="center" align="middle">
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
          size="small"
          pagination={{ pageSize: 15 }}
          columns={columns.map((c) => ({
            ...c,
            ellipsis: true,
          }))}
          dataSource={questionsData}
        ></Table>
      </Card>
    </div>
  );
};

export default QuestionsList;
