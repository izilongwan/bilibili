import React from 'react';
import { Button } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const ColumnStatus = (text, { statusLoading }) =>
  text
    ? (
      <Button
        loading={ statusLoading }
        className="state-btn"
        data-type="status"
        data-status="0"
        icon={ <DownloadOutlined className="icon" /> }
        type="danger">
        下架
      </Button>
    )
    : (
      <Button
        className="state-btn"
        loading={ statusLoading }
        data-type="status"
        data-status="1"
        icon={ <UploadOutlined className="icon" /> }
        type="primary">
        上架
      </Button>
    );

export default ColumnStatus;
