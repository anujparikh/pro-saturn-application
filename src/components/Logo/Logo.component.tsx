import React from 'react';
import logo from '../../assets/images/logo-blue.png';
import './Logo.component.less';

/**
 * TODO:
 * - Add props to make component show just logo or logo with text
 */
const Logo: React.FC = () => {
  return <img className="logo" src={logo} alt="Logo" />;
};

export default Logo;
