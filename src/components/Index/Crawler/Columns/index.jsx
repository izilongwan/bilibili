import React from 'react';
import { Button, Tag } from 'antd';
import AutoAsyncSwitch from '../Switch';
import Selector from '../Selector';

const Columns = [
  {
    title: () => <em className="tb-title">序号</em>,
    dataIndex: 'key',
    align: 'center',
    width: 100
  },

  {
    title: () => <em className="tb-title">爬取数据名称</em>,
    dataIndex: 'title',
    align: 'center',
    render: (text, { color }) => (
      <Tag color={ color } className="crawl-title">
        { text }
      </Tag>
    )
  },

  {
    title: () => <em className="tb-title">爬取时间</em>,
    dataIndex: 'duration',
    align: 'center',
    render: (text, item) =>
      (item.key === 1 ? <Selector { ...item } /> : '')
  },

  {
    title: () => <em className="tb-title">操作</em>,
    dataIndex: 'apiName',
    align: 'center',
    width: 300,
    render: (value, { statusLoading, status, key, text }) => {
      return key === 1
        ? (
          <AutoAsyncSwitch status={ status } loading={ statusLoading } />
        )
        : (
          <Button
            className="state-btn"
            data-type="crawl"
            data-crawl={ value }
            loading={ statusLoading }
            type="primary">
            { text }
          </Button>
        );
    }
  }
];

export default Columns;
