import React from 'react';
import { Tag } from 'antd';
import LazyLoad from 'react-lazy-load';
import lazyImg from '~/assets/images/lazy.png';
import ColumnStatus from '~/components/Common/ColumnStatus';
import ColumnSearchProps from '~/components/Common/ColumnSearchProps';

const Columns = [
  {
    title: () => <em className="tb-title">序号</em>,
    dataIndex: 'key',
    align: 'center',
    width: 100,
    fixed: 'left'
  },

  {
    title: () => <em className="tb-title">直播图片</em>,
    dataIndex: 'img',
    align: 'center',
    width: 200,
    render: (img, { title, href }) => (
      <a
        href={ href }
        rel="noopener noreferrer"
        target="_blank"
        className="bili-img-wrap"
        style={ { backgroundImage: `url(${ lazyImg })` } }>
        <LazyLoad height={ 106 }>
          <img height="100%" src={ img } alt="图片" title={ title } />
        </LazyLoad>
      </a>
    )
  },

  {
    title: () => <em className="tb-title">直播间标题</em>,
    dataIndex: 'title',
    align: 'center',
    width: 250,
    ...ColumnSearchProps('title'),
    render: (text, { href }) => (
      <a
        href={ href }
        rel="noopener noreferrer"
        target="_blank"
        className="course-name">
        { text }
      </a>
    )
  },

  {
    title: () => <em className="tb-title">Up主头像</em>,
    dataIndex: 'up_img',
    align: 'center',
    width: 120,
    render: (img) => (
      <div className="up-img">
        <img src={ img } alt="头像" />
      </div>
    )
  },

  {
    title: () => <em className="tb-title">Up主</em>,
    dataIndex: 'up_name',
    align: 'center',
    width: 200,
    render: (text, { up_href }) => (
      <a
        href={ up_href }
        rel="noopener noreferrer"
        target="_blank"
        className="course-name">
        <Tag color="blue">{ text }</Tag>
      </a>
    )
  },

  {
    title: () => <em className="tb-title">直播观看人数</em>,
    dataIndex: 'count',
    align: 'center',
    width: 200,
    sorter: (a, b) => {
      const str = '万';
      const aCount = a.count.includes(str) ? parseInt(a.count) * 10000 : a.count;
      const bCount = b.count.includes(str) ? parseInt(b.count) * 10000 : b.count;

      return aCount - bCount;
    },
    render: (text) => (<em>{ text }</em>)
  },

  {
    title: () => <em className="tb-title">标签</em>,
    dataIndex: 'tag',
    align: 'center',
    width: 100,
    render: (text) => (
      <Tag color="lime">{ text }</Tag>
    )
  },

  {
    title: () => <em className="tb-title">操作</em>,
    width: 250,
    align: 'center',
    dataIndex: 'status',
    fixed: 'right',
    filters: [
      { text: '已上架', value: 1 },
      { text: '已下架', value: 0 }
    ],
    onFilter: (value, record) => record.status.toString().includes(value),
    render: ColumnStatus
  }
];

export default Columns;
