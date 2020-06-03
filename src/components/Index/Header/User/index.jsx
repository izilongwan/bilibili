import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Tag } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import DropdownList from './Dropdown';
import './index.scss';

const User = () => {

  const user = useSelector(state => state.user);

  return (
    <div className="user">
      <Tag color="purple">管理员</Tag>

      <Dropdown overlay={ <DropdownList /> }>
        <span className="ant-dropdown-link">
          <span className="nickname">{ user ? user.nickname : 'super' }</span>

          <DownOutlined />
        </span>
      </Dropdown>
    </div>
  );
}

export default User;
