import React from 'react';
import { Spin } from 'antd';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return null;
  }

  if (pastDelay) {
    return (
      <div
        className="loading-wrap"
        style={ {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        } }
      >
        <Spin size="large" />
      </div>
    );
  }

  return null;
}

export default Loading;
