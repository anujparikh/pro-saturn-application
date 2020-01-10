import React from 'react';
import { PageHeader, Button, Badge } from 'antd';
import './Header.component.less';

const Header: React.FC = () => {
  return (
    <PageHeader
      backIcon={false}
      ghost={false}
      title="Dashboard"
      extra={[
        <Badge key="1" dot={true} offset={[-5, 5]}>
          <Button className="header-icons" shape="round" size="small">
            Pending Feedback
          </Button>
        </Badge>,
      ]}
    ></PageHeader>
  );
};

export default Header;
