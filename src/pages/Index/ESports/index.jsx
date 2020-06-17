import React, { useContext } from 'react';
import { Table } from 'antd';
import Columns from '~/components/Index/ESports/Columns'
import Context from '~/components/Index/Context'

const ESports = () => {
  const { onTableClick, data, loading, pagination, scroll } = useContext(Context);

  return (
    <Table
      loading={ loading }
      columns={ Columns }
      onRow={ (data) => ({ onClick: (e) => onTableClick(e, data) }) }
      scroll={ scroll }
      rowKey={ ({ key }) => key }
      pagination={ pagination }
      dataSource={ data }
    />
  );
};

export default ESports;
