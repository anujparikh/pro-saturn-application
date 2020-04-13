import React, { FC, useEffect } from 'react';
import { roleTypes, categoryTypes } from './dummy';
import './index.less';
import { Card, Spin, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import SearchSortAndFilter, {
  SearchSortAndFilterPropTypes,
} from '../../../../components/seach-and-filter';
import { getAllTemplates } from '../../../../services/template/actions';
import NoDataCard from '../../../../components/no-data-card';

const TemplatesList: FC = () => {
  const dispatch = useDispatch();
  const templateData = useSelector((state: any) => state.templates.templates);
  const isLoading = useSelector((state: any) => state.templates.isLoading);

  const searchSortAndFilterProps: SearchSortAndFilterPropTypes = {
    searchPlaceholder: 'search templates',
    filterPlaceholder: 'filter templates by roles and categories',
    roleTypes,
    categoryTypes,
  };

  useEffect(() => {
    dispatch(getAllTemplates());
  }, [dispatch]);

  return (
    <div className="search-sort-filter-container">
      <Card>
        <SearchSortAndFilter {...searchSortAndFilterProps}></SearchSortAndFilter>
      </Card>
      <Card className="template-table-card">
        {isLoading ? (
          <Spin size="large" style={{ textAlign: 'center', width: '100%' }}></Spin>
        ) : templateData.length === 0 ? (
          <NoDataCard description="Templates not created"></NoDataCard>
        ) : (
          <Typography>Templates</Typography>
        )}
      </Card>
    </div>
  );
};

export default TemplatesList;
