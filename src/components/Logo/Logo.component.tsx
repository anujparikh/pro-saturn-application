import React from 'react';
import './Logo.component.less';

/**
 * TODO:
 * - Add props to make component show just logo or logo with text
 */
const Logo: React.FC = () => {
  return <img className="logo" src="/logo-blue.png" alt="Logo" />;
};

export default Logo;
