import React, { FC } from 'react';
import { Card, Form, Input, Checkbox, Button, Row, Col } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  GithubFilled,
  GoogleCircleFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import './index.less';
import Logo from '../../../../components/logo';

const SignInUser: FC = () => {
  return (
    <>
      <Row className="logo-row" justify="center">
        <Logo></Logo>
      </Row>
      <Row>
        <Col xl={{ span: 8, offset: 8 }}>
          <Card title="SIGN IN" className="sign-in-card-content">
            <Form>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please enter your username!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Row justify="start">
                    <Checkbox>Remember me</Checkbox>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row justify="end">
                    <a className="login-form-forgot" href="#/">
                      Forgot username or password?
                    </a>
                  </Row>
                </Col>
              </Row>
              <Row className="login-form-button">
                <Col span={12}>
                  <Button type="primary" block htmlType="submit">
                    Sign In
                  </Button>
                </Col>
                <Col span={12}>
                  <Row justify="end">
                    <GithubFilled className="login-form-icon" />
                    <GoogleCircleFilled className="login-form-icon" />
                    <LinkedinFilled className="login-form-icon" />
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={{ span: 8, offset: 8 }}>
          <Card className="privacy-card-content">
            <Row>
              <Col span={12}>
                <Row justify="space-between">
                  <a href="#/">Terms</a>
                  <a href="#/">Privacy</a>
                  <a href="#/">Security</a>
                </Row>
              </Col>
              <Col span={6} offset={6}>
                <Row justify="end">
                  <a href="/join">Create Account</a>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SignInUser;
