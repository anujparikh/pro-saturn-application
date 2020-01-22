import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import Badge, { BadgeProps } from 'antd/lib/badge';

export type ButtonPRPropTypes = {
  title: string;
  showBadge?: boolean;
  buttonProps?: ButtonProps;
  badgeProps?: BadgeProps;
};

const ButtonPR: React.FC<ButtonPRPropTypes> = ({ title, showBadge, buttonProps, badgeProps }) => {
  if (showBadge) {
    return (
      <Badge {...badgeProps}>
        <Button {...buttonProps}>{title}</Button>
      </Badge>
    );
  } else {
    return <Button {...buttonProps}>{title}</Button>;
  }
};

ButtonPR.defaultProps = {
  showBadge: true,
  badgeProps: { dot: true, offset: [-3, 3] as [number, number] },
  buttonProps: {},
};

export default ButtonPR;
