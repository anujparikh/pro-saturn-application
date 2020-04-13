import React, { FC } from 'react';
import { PageHeader } from 'antd';
import { PageHeaderProps } from 'antd/lib/page-header';

const Header: FC<PageHeaderProps> = (props) => {
  return <PageHeader {...props}></PageHeader>;
};

Header.defaultProps = {
  ghost: false,
  backIcon: false,
};

export default Header;
