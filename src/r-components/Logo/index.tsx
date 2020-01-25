import React from 'react';
import textLogo from '../../assets/images/logo-blue.png';
import onlyLogo from '../../assets/images/logo-only.png';
import './index.less';

export type LogoPropTypes = {
  hideText?: boolean;
  altText?: string;
};

const Logo: React.FC<LogoPropTypes> = ({ hideText, altText }) => {
  return <img className="logo" src={hideText ? onlyLogo : textLogo} alt={altText} />;
};

Logo.defaultProps = {
  hideText: false,
  altText: 'Logo',
};

export default Logo;
