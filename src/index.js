import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'styles/resets.css';
import 'styles/common.css';
import 'styles/fonts.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ConfigProvider locale={ zhCN }>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
