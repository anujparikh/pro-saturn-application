import React, { FC } from 'react';
import './index.less';
import { Avatar, Row, Col, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export type ProfileMenuPropTypes = {
  showUserName?: boolean;
  userName?: string;
};

const ProfileMenu: FC<ProfileMenuPropTypes> = ({ showUserName, userName }) => {
  const { Text } = Typography;
  const avatar = <Avatar icon={<UserOutlined />}></Avatar>;
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
    <Row justify="center">
      <Col>{avatar}</Col>
    </Row>
  );
};

ProfileMenu.defaultProps = {
  showUserName: false,
  userName: '',
};

export default ProfileMenu;
