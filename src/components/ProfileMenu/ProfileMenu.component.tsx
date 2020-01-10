import React from 'react';
import './ProfileMenu.component.less';
import { Avatar, Row, Col, Typography } from 'antd';

/**
 * TODO:
 * - Add props to make component show just avatar
 */
const ProfileMenu: React.FC = () => {
  const { Text } = Typography;
  return (
    <Row>
      <Col span={6} offset={3}>
        <Avatar icon="user"></Avatar>
      </Col>
      <Col span={14} offset={1} className="profile-menu-text">
        <Text>Anuj Parikh</Text>
      </Col>
    </Row>
  );
};

export default ProfileMenu;
