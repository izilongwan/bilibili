import React from 'react';
import { Menu, message, Popconfirm } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { logout } from '~/api/user'
import { MESSAGE } from '~/config'
import { asyncFunc } from '~/utils/tools'

const { SERVER_ERROR } = MESSAGE;

const Dropdown = () => {
  const { push } = useHistory();

  const hanldeLogout = async () => {
    const [err, { code, msg }] = await asyncFunc(logout);

    if (err) {
      message.error(SERVER_ERROR);
      return;
    }

    if (code === 0) {
      push('/login');
      message.success(msg);
      return;
    }

    message.error(msg);
  };

  return (
    <Menu>
      <Menu.Item>
        <Popconfirm
          title="确定退出登录?"
          onConfirm={ hanldeLogout }
        >
          <LogoutOutlined />
        安全退出
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
};

export default Dropdown;
