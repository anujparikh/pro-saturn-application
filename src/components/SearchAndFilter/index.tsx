import React, { FC } from 'react';
import { Row, Col, Input, Select, Card, Icon } from 'antd';
import './index.less';

export type SearchSortAndFilterPropTypes = {
  roleTypes?: string[];
  categoryTypes?: string[];
  onChangeOfSortBy?: () => void;
  onChangeOfFilterByRoles?: () => void;
  onChangeOfFilterByCategories?: () => void;
};

// TODO: remove default values when destructuing the props and make defaultProps work
const SearchSortAndFilter: FC<SearchSortAndFilterPropTypes> = (props) => {
  const { Search } = Input;
  const { Option, OptGroup } = Select;
  const { roleTypes = [], categoryTypes = [] } = props;

  return (
    <Card>
      <Row>
        <Col span={15}>
          <Search placeholder="search templates"></Search>
        </Col>
        <Col span={7} offset={1}>
          <Select
            className="filter-select"
            mode="tags"
            placeholder="filter templates by roles and categories"
            suffixIcon={<Icon type="delete" />}
          >
            <OptGroup label="Roles">
              {roleTypes.map((role) => (
                <Option key={role} value={role}>
                  {role}
                </Option>
              ))}
            </OptGroup>
            <OptGroup label="Categories">
              {categoryTypes.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </OptGroup>
          </Select>
        </Col>
        <Col span={1}>
          <Icon className="clear-filters-icon" type="delete" />
        </Col>
      </Row>
    </Card>
  );
};

SearchSortAndFilter.defaultProps = {
  roleTypes: [],
  categoryTypes: [],
  onChangeOfSortBy: () => {},
  onChangeOfFilterByRoles: () => {},
  onChangeOfFilterByCategories: () => {},
} as Partial<SearchSortAndFilterPropTypes>;

export default SearchSortAndFilter;