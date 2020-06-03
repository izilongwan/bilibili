import React, { useContext } from 'react';
import { Table } from 'antd';
import Columns from 'components/Index/Carousel/Columns'
import Context from 'components/Index/Context'

const Carousel = () => {
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

export default Carousel;
