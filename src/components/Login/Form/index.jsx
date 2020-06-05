import { LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import * as API from '~/api/user';
import { MESSAGE } from '~/config';
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import { asyncFunc, makeCrypto } from '~/utils/tools';
import { CAPTCHA } from '~/api/config';

const { SERVER_ERROR } = MESSAGE;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const initialValues = {
  account: 'admin',
  password: 'admin',
  captcha: ''
};

const rules = {
  account: [
    { required: true, message: 'The account is empty!' },
    {
      min: 5,
      max: 5,
      message: 'The account length is 5',
      validateTrigger: 'blur'
    }
  ],
  password: [
    { required: true, message: 'The password is empty!' },
    {
      min: 5,
      max: 20,
      message: 'The password length is 5-20',
      validateTrigger: 'blur'
    }
  ],
  captcha: [
    { required: true, message: 'The captcha is empty!' },
    {
      min: 4,
      max: 4,
      message: 'The captcha length is 4',
      validateTrigger: 'blur'
    }
  ]
};

const Login = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const imgRef = useRef(null);

  const onFinish = async (values) => {
    setLoading(true);
    values.password = makeCrypto(values.password);
    const [err, res] = await asyncFunc(() =>
      API.login(values)
    );

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

    const { code, msg } = res;

    if (code === 0) {
      message.success(msg);
      push('/');
      setLoading(false);
      return;
    }

    setLoading(false);
    message.error(msg);
  };

  const checkUserStatus = async () => {
    const [err, { code }] = await asyncFunc(
      API.checkStatus
    );

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

    code === 0 && push('/');
  };

  const genImgSrc = () => `${ CAPTCHA }?${ Math.random() }`;

  const refreshImg = () =>
    (imgRef.current.src = genImgSrc());

  useEffect(() => {
    checkUserStatus();
  });

  return (
    <Form
      { ...layout }
      initialValues={ initialValues }
      name="basic"
      onFinish={ onFinish }
      colon={ false }
      className="login-form">
      <Form.Item
        label="Account"
        name="account"
        hasFeedback
        rules={ rules.account }>
        <Input
          maxLength="5"
          placeholder="Please input your account"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={ rules.password }>
        <Input.Password
          initialValues="admin"
          maxLength="20"
          placeholder="Please input your password"
        />
      </Form.Item>

      <Form.Item className="captcha-wrap" label="Captcha">
        <Form.Item
          rules={ rules.captcha }
          name="captcha">
          <Input
            initialValues="captcha"
            maxLength="4"
            placeholder="Please input captcha"
          />
        </Form.Item>

        <Form.Item className="captcha-cell">
          <img
            ref={ imgRef }
            onClick={ () => refreshImg() }
            src={ genImgSrc() }
            alt="验证码"
          />
        </Form.Item>
      </Form.Item>

      <Form.Item { ...tailLayout }>
        <Button
          icon={ <LoginOutlined /> }
          type="primary"
          loading={ loading }
          htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
