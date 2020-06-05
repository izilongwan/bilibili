import React, { useContext } from 'react';
import { Table } from 'antd';
import Columns from '~/components/Common/Columns2'
import Context from '~/components/Index/Context'

const Bangumi = () => {
  const { onTableClick, data, loading, pagination, scroll } = useContext(Context);

  return (
    <Table
      loading={ loading }
      columns={ Columns }
      onRow={ (data) => ({ onClick: (e) => onTableClick(e, data) }) }
      scroll={ scroll }
      pagination={ pagination }
      dataSource={ data }
    />
  );
};

export default Bangumi;
