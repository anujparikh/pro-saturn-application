import React, { FC } from 'react';
import { Row, Col, Input, Select } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import './index.less';

export type SearchSortAndFilterPropTypes = {
  searchPlaceholder: string;
  filterPlaceholder: string;
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
  const { roleTypes = [], categoryTypes = [], searchPlaceholder, filterPlaceholder } = props;

  return (
    <Row>
      <Col span={15}>
        <Search placeholder={searchPlaceholder}></Search>
      </Col>
      <Col span={7} offset={1}>
        <Select
          className="filter-select"
          mode="tags"
          placeholder={filterPlaceholder}
          suffixIcon={<DeleteOutlined />}
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
        <DeleteOutlined className="clear-filters-icon" />
      </Col>
    </Row>
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
