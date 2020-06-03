import { LoginOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import * as API from 'api/user';
import { MESSAGE } from 'config';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { asyncFunc } from 'utils/tools';

const { SERVER_ERROR } = MESSAGE;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Login = () => {
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const [err, { code, msg }] = await asyncFunc(() => API.login(values));

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

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
    const [err, { code }] = await asyncFunc(API.checkStatus);

    if (err) {
      message.error(SERVER_ERROR);
      setLoading(false);
      return;
    }

    code === 0 && push('/');
  };

  const initialValues = {
    account: 'admin',
    password: 'admin'
  };

  useEffect(() => {
    checkUserStatus();
  });

  return (
    <Form
      { ...layout }
      initialValues={ initialValues }
      name='basic'
      onFinish={ onFinish }
      colon={ false }
      className='login-form'>
      <Form.Item
        label='Account'
        name='account'
        hasFeedback
        rules={ [
          { required: true, message: 'The account is empty!' },
          {
            min: 5,
            max: 5,
            message: 'The account length is 5',
            validateTrigger: 'blur'
          }
        ] }>
        <Input maxLength='5' placeholder='Please input your account' />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        hasFeedback
        rules={ [
          { required: true, message: 'The password is empty!' },
          {
            min: 5,
            max: 20,
            message: 'The password length is 5-20',
            validateTrigger: 'blur'
          }
        ] }>
        <Input.Password
          initialValues='admin'
          maxLength='20'
          placeholder='Please input your password'
        />
      </Form.Item>

      <Form.Item { ...tailLayout }>
        <Button
          icon={ <LoginOutlined /> }
          type='primary'
          loading={ loading }
          htmlType='submit'>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
