import { Tag } from 'antd';
import { BILI } from '~/config';
import React from 'react';
import ColumnSearchProps from '../ColumnSearchProps';
import ColumnStatus from '../ColumnStatus';
import SelectField from '../Select';
import LazyLoad from 'react-lazy-load';
import lazyImg from '~/assets/images/lazy.png';

const { FIELD } = BILI;

const Columns = [
  {
    title: () => <em className="tb-title">排名</em>,
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
    title: () => <em className="tb-title">Up主</em>,
    align: 'center',
    width: 120,
    dataIndex: 'up_name',
    render: (text, { up_href }) => (
      <a href={ up_href } target="_blank" rel="noopener noreferrer">
        <Tag color="lime">{ text }</Tag>
      </a>
    )
  },

  {
    title: () => <em className="tb-title">播放量</em>,
    width: 150,
    align: 'center',
    dataIndex: 'play_count',
    sorter: (a, b) => a.play_count - b.play_count,
    render: (text) => <span className="orange">{ text }</span>
  },

  {
    title: () => <em className="tb-title">弹幕量</em>,
    align: 'center',
    width: 120,
    dataIndex: 'popup_count',
    sorter: (a, b) => a.popup_count - b.popup_count,
    render: (text) => <span className="green">{ text }</span>
  },

  {
    title: () => <em className="tb-title">得分</em>,
    align: 'center',
    width: 120,
    dataIndex: 'score',
    sorter: (a, b) => a.score - b.score,
    render: (text) => <Tag color="cyan">{ text }</Tag>
  },

  {
    title: () => <em className="tb-title">视频分类</em>,
    align: 'center',
    width: 400,
    dataIndex: 'tags',
    onFilter: (value, { tags }) => tags.includes(value),
    filters: FIELD.map((item) => ({ text: item, value: item })),
    render: (text, data) => <SelectField data={ data } />
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
