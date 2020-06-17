import React, { useContext } from 'react';
import { Table } from 'antd';
import Columns from '~/components/Index/Crawler/Columns'
import Context from '~/components/Index/Context'

const Crawler = () => {
  const { loading, data, onTableClick } = useContext(Context);

  return (
    <Table
      loading={ loading }
      columns={ Columns }
      onRow={ (data) => ({ onClick: (e) => onTableClick(e, data) }) }
      rowKey={ ({ key }) => key }
      dataSource={ data }
      pagination={ false }
    />
  );
};

export default Crawler;
