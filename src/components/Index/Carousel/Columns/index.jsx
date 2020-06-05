import React from 'react';
import LazyLoad from 'react-lazy-load';
import lazyImg from '~/assets/images/lazy.png';
import ColumnStatus from '~/components/Common/ColumnStatus';
import ColumnSearchProps from '~/components/Common/ColumnSearchProps';

const Columns = [
  {
    title: () => <em className="tb-title">序号</em>,
    dataIndex: 'key',
    align: 'center',
    width: 100
  },

  {
    title: () => <em className="tb-title">轮播图片</em>,
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
