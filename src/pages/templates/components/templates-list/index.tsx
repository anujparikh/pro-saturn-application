import React, { FC, useEffect } from 'react';
import { roleTypes, categoryTypes } from './dummy';
import './index.less';
import { Card, Spin, Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import SearchSortAndFilter, {
  SearchSortAndFilterPropTypes,
} from '../../../../components/seach-and-filter';
import { getAllTemplates } from '../../../../services/template/actions';
import NoDataCard from '../../../../components/no-data-card';
import TemplateCard from '../template-card';
import { ITemplateModel } from '../../../../services/template/interfaces';

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
      <Card bodyStyle={{ height: '54rem', overflow: 'scroll' }} className="template-table-card">
        {isLoading ? (
          <Spin size="large" style={{ textAlign: 'center', width: '100%' }}></Spin>
        ) : templateData.length === 0 ? (
          <NoDataCard description="Templates not created"></NoDataCard>
        ) : (
          <Row gutter={15}>
            {templateData.map((t: ITemplateModel) => (
              <Col style={{ marginBottom: 15 }} span={8}>
                <TemplateCard
                  title={t.title}
                  duration={t.duration}
                  description={t.description}
                  categories={t.categories}
                  roles={t.roles}
                  lastUpdatedAt="3 days ago"
                ></TemplateCard>
              </Col>
            ))}
          </Row>
        )}
      </Card>
    </div>
  );
};

export default TemplatesList;
