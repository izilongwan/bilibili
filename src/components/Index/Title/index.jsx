import React from 'react'
import { Tag } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const Title = (props) => {
  const { resetData, TITLE, pathname, loading } = props;

  const title = TITLE[pathname];

  return (
    <div className="content-header">
      <h3 className="title">{ title }</h3>

      <Tag color="green" onClick={ resetData } className="refresh">
        <span className="text">刷新</span>
        <SyncOutlined spin={ loading } />
      </Tag>
    </div>
  )
}

export default Title
