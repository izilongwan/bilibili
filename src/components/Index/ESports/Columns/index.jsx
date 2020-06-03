import React from 'react';
import { Tag } from 'antd';
import LazyLoad from 'react-lazy-load';
import lazyImg from 'images/lazy.png';
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
    title: () => <em className="tb-title">图片</em>,
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
    title: () => <em className="tb-title">标题</em>,
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
    title: () => <em className="tb-title">点赞量</em>,
    dataIndex: 'thumb_count',
    align: 'center',
    sorter: (a, b) => {
      const str = '万';
      const aCount = a.thumb_count.includes(str) ? parseInt(a.thumb_count) * 10000 : a.thumb_count;
      const bCount = b.thumb_count.includes(str) ? parseInt(b.thumb_count) * 10000 : b.thumb_count;

      return aCount - bCount;
    },
    width: 120
  },

  {
    title: () => <em className="tb-title">播放量</em>,
    dataIndex: 'play_count',
    align: 'center',
    sorter: (a, b) => {
      const str = '万';
      const aCount = a.play_count.includes(str) ? parseInt(a.play_count) * 10000 : a.play_count;
      const bCount = b.play_count.includes(str) ? parseInt(b.play_count) * 10000 : b.play_count;

      return aCount - bCount;
    },
    width: 200
  },

  {
    title: () => <em className="tb-title">时长</em>,
    dataIndex: 'duration',
    align: 'center',
    width: 200,
    render: (text) => (<Tag color="blue">{ text }</Tag>)
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
