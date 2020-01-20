import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import Badge, { BadgeProps } from 'antd/lib/badge';

type ButtonPRPropTypes = {
  buttonProps: ButtonProps;
  badgeProps: BadgeProps;
  title: string;
};

const ButtonPR: React.FC<ButtonPRPropTypes> = ({ buttonProps, badgeProps, title }) => {
  return (
    <Badge {...badgeProps}>
      <Button {...buttonProps}>{title}</Button>
    </Badge>
  );
};

export default ButtonPR;
