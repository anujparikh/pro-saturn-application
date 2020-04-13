import React, { FC } from 'react';
import { Card, Form, Input, Button, Row, Col, Typography } from 'antd';
import './index.less';
import Logo from '../../../../components/logo';

const SignUpUser: FC = () => {
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
                <Col span={11}>
                  <Form.Item
                    name="firstName"
                    rules={[{ required: true, message: 'Please enter your first name' }]}
                  >
                    <Input placeholder="First name" />
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item
                    name="lastName"
                    rules={[{ required: true, message: 'Please enter your last name' }]}
                  >
                    <Input placeholder="Last name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="user"
                    rules={[{ required: true, message: 'Please enter desired username' }]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input type="password" placeholder="Password" />
                  </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                  <Form.Item
                    name="confirm"
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
                    <Input type="password" placeholder="Confirm password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="email"
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
                    <Input type="email" placeholder="Email" />
                  </Form.Item>
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

export default SignUpUser;
