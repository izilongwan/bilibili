import React, { useContext } from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import context from '~/components/Index/Context'

const AutoAsyncSwitch = ({ loading, status }) => {
  const { onAutoAsyncDataChange } = useContext(context);

  return (
    <Switch
      loading={ loading }
      onChange={ onAutoAsyncDataChange }
      checkedChildren={ <CheckOutlined /> }
      unCheckedChildren={ <CloseOutlined /> }
      defaultChecked={ status ? true : false }
    />
  );
}

export default AutoAsyncSwitch;
