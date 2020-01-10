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
      <Col span={5} offset={4}>
        <Avatar icon="user"></Avatar>
      </Col>
      <Col span={12} className="profile-menu-text">
        <Text strong>Anuj Parikh</Text>
      </Col>
    </Row>
  );
};

export default ProfileMenu;
