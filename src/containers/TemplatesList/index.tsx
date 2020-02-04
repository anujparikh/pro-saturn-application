import React, { FC } from 'react';
import SearchSortAndFilter from '../../components/SearchAndFilter';
import { roleTypes, categoryTypes, templateData } from './dummy';
import columns from './table-columns';
import './index.less';
import { Table, Card } from 'antd';

const TemplatesList: FC = () => {
  const searchSortAndFilterProps = {
    roleTypes,
    categoryTypes,
  };
  return (
    <div className="search-sort-filter-container">
      <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
      <Card className="template-table-card">
        <Table
          columns={columns.map((c) => ({
            ...c,
            // align: 'center',
            ellipsis: true,
          }))}
          dataSource={templateData}
        ></Table>
      </Card>
    </div>
  );
};

export default TemplatesList;
