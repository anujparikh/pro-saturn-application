import React, { FC } from 'react';
import { Card, Form, Input, Icon, Button, Row, Col, Typography } from 'antd';
import './SignUp.component.less';
import { FormComponentProps } from 'antd/lib/form';
import Logo from '../../r-components/Logo';

const SignIn: FC<FormComponentProps> = (props) => {
  const { getFieldDecorator } = props.form;
  const { Text } = Typography;
  return (
    <>
      <Row className="logo-row" type="flex" justify="center">
        <Logo></Logo>
      </Row>
      <Row>
        <Col xl={{ span: 8, offset: 8 }}>
          <Card title="CREATE ACCOUNT" className="sign-up-card-content">
            <Form>
              <Row>
                <Col span={10}>
                  <Form.Item>
                    {getFieldDecorator('firstName', {
                      rules: [{ required: true, message: 'Please enter your first name' }],
                    })(<Input placeholder="First name" />)}
                  </Form.Item>
                </Col>
                <Col span={10} offset={2}>
                  <Form.Item>
                    {getFieldDecorator('lastName', {
                      rules: [{ required: true, message: 'Please enter your last name' }],
                    })(<Input placeholder="Last name" />)}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <Form.Item>
                    {getFieldDecorator('user', {
                      rules: [{ required: true, message: 'Please enter desired username' }],
                    })(<Input placeholder="Username" />)}
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <Icon className="sign-up-check-icon" type="check-circle" />
                </Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please enter your password' }],
                    })(<Input type="password" placeholder="Password" />)}
                  </Form.Item>
                </Col>
                <Col span={10} offset={2}>
                  <Form.Item>
                    {getFieldDecorator('confirmPassword', {
                      rules: [{ required: true, message: 'Please re-enter your password' }],
                    })(<Input type="password" placeholder="Confirm Password" />)}
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <Icon className="sign-up-check-icon" type="check-circle" />
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <Form.Item>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please enter your Email' }],
                    })(<Input placeholder="Email" />)}
                  </Form.Item>
                </Col>
                <Col span={1} offset={1}>
                  <Icon className="sign-up-check-icon" type="check-circle" />
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
                    <Text strong>Sign in instead</Text>
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

export default Form.create()(SignIn);
