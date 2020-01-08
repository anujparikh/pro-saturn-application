import React from 'react';
import { Card, Form, Input, Icon, Checkbox, Button, Row, Col } from 'antd';
import './SignIn.component.less';
import { FormComponentProps } from 'antd/lib/form';
import Logo from '../Logo/Logo.component';

const SignIn: React.FC<FormComponentProps> = (props) => {
  const { getFieldDecorator } = props.form;
  return (
    <>
      <Row className="logo-row" type="flex" justify="center">
        <Logo></Logo>
      </Row>
      <Row>
        <Col xl={{ span: 6, offset: 9 }}>
          <Card title="SIGN IN" className="sign-in-card-content">
            <Form>
              <Form.Item>
                {getFieldDecorator('user', {
                  rules: [{ required: true, message: 'Please enter your email or username' }],
                })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please enter your password' }],
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />)}
              </Form.Item>
              <Row>
                <Col span={12}>
                  <Row type="flex" justify="start">
                    <Checkbox>Remember me</Checkbox>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row type="flex" justify="end">
                    <a className="login-form-forgot" href="">
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
                  <Row type="flex" justify="end">
                    <Icon type="github" theme="filled" className="login-form-icon" />
                    <Icon type="google-circle" theme="filled" className="login-form-icon" />
                    <Icon type="linkedin" theme="filled" className="login-form-icon" />
                  </Row>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={{ span: 6, offset: 9 }} xl={{ span: 6, offset: 9 }} md={{ span: 12, offset: 6 }}>
          <Card className="privacy-card-content">
            <Col span={12}>
              <Row type="flex" justify="space-around">
                <a href="">Terms</a>
                <a href="">Privacy</a>
                <a href="">Security</a>
              </Row>
            </Col>
            <Col span={6} offset={6}>
              <Row type="flex" justify="end">
                <a href="/join">Create Account</a>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Form.create()(SignIn);
