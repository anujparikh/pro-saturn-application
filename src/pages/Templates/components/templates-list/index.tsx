import React, { FC } from 'react';
import SearchSortAndFilter from '../../../../components/SearchAndFilter';
import { SearchSortAndFilterPropTypes } from '../../../../components/SearchAndFilter';
import { roleTypes, categoryTypes, templateData } from './dummy';
import columns from './table-columns';
import './index.less';
import { Table, Card } from 'antd';

const TemplatesList: FC = () => {
  const searchSortAndFilterProps: SearchSortAndFilterPropTypes = {
    searchPlaceholder: 'search templates',
    filterPlaceholder: 'filter templates by roles and categories',
    roleTypes,
    categoryTypes,
  };
  return (
    <div className="search-sort-filter-container">
      <Card>
        <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
      </Card>
      <Card className="template-table-card">
        <Table
          columns={columns.map((c) => ({
            ...c,
            ellipsis: true,
          }))}
          dataSource={templateData}
        ></Table>
      </Card>
    </div>
  );
};

export default TemplatesList;
