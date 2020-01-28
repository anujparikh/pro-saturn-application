import React, { FC } from 'react';
import './index.less';
import { Avatar, Row, Col, Typography } from 'antd';

export type ProfileMenuPropTypes = {
  showUserName?: boolean;
  userName?: string;
};

const ProfileMenu: FC<ProfileMenuPropTypes> = ({ showUserName, userName }) => {
  const { Text } = Typography;
  const avatar = <Avatar icon="user"></Avatar>;
  return showUserName ? (
    <Row>
      <Col span={5} offset={4}>
        {avatar}
      </Col>
      <Col span={12} className="profile-menu-text">
        <Text strong>{userName}</Text>
      </Col>
    </Row>
  ) : (
    <Row type="flex" justify="center">
      <Col>{avatar}</Col>
    </Row>
  );
};

ProfileMenu.defaultProps = {
  showUserName: false,
  userName: '',
};

export default ProfileMenu;
