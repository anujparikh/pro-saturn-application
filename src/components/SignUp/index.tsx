import React, { FC } from 'react';
import { Card, Form, Input, Button, Row, Col, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './index.less';
import Logo from '../Logo';

const SignUp: FC = () => {
  const { Text } = Typography;
  return (
    <>
      <Row className="logo-row" justify="center">
        <Logo></Logo>
      </Row>
      <Row>
        <Col xl={{ span: 8, offset: 8 }}>
          <Card title="CREATE ACCOUNT" className="sign-up-card-content">
            <Form>
              <Row>
                <Col span={10}>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[{ required: true, message: 'Please enter your first name' }]}
                  >
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={10} offset={2}>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[{ required: true, message: 'Please enter your last name' }]}
                  >
                    <Input placeholder="Last name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <Form.Item
                    name="user"
                    label="Username"
                    rules={[{ required: true, message: 'Please enter desired username' }]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <CheckCircleOutlined className="sign-up-check-icon" />
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col span={10} offset={2}>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <CheckCircleOutlined className="sign-up-check-icon" />
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <CheckCircleOutlined className="sign-up-check-icon" />
                </Col>
              </Row>
              <Row className="sign-up-form-button">
                <Col span={9} offset={2}>
                  <Button type="primary" block htmlType="submit">
                    Submit
                  </Button>
                </Col>
                <Col className="login-link" span={9} offset={1}>
                  <a href="/login">
                    <Text strong>Go to Sign In</Text>
                  </a>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SignUp;
