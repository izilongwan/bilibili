import React, { useContext } from 'react';
import { Select } from 'antd';
import { DURATION } from '~/config'
import Context from '~/components/Index/Context'

const { Option } = Select;

const Selector = ({ duration, durationLoading }) => {
  const { onSelectAutoAsyncDuration } = useContext(Context);

  return (
    <Select
      loading={ durationLoading }
      defaultValue={ duration }
      style={ { width: 150 } }
      onChange={ (value) => onSelectAutoAsyncDuration(value) }>
      { DURATION.map(({ text, value }, idx) => (
        <Option key={ idx } value={ value }>{ text }</Option>
      )) }
    </Select>
  );
};

export default Selector;
