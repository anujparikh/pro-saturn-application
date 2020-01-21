import React from 'react';
import { PageHeader } from 'antd';
import ButtonPR from '../../r-components/ButtonPR';

//TODO: Use reusable TAG component inplace of button
const Header: React.FC = () => {
  const buttonPRProps = {
    badgeProps: { dot: true, offset: [-3, 3] as [number, number], status: 'warning' as 'warning' },
    buttonProps: { shape: 'round' as 'round', size: 'small' as 'small' },
    title: 'Pending Feedback',
  };
  return (
    <PageHeader
      backIcon={false}
      ghost={false}
      title="Dashboard"
      extra={<ButtonPR {...buttonPRProps}></ButtonPR>}
    ></PageHeader>
  );
};

export default Header;
