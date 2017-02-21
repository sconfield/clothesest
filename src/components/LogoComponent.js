import React from 'react';
import { Tag, Icon } from 'antd';

function LogoComponent() {
  return (
    <div>
      <Tag color="pink" size="large">
        <Icon type="smile-o" spin="true" />
        <label>&nbsp;Clothesest</label>
      </Tag>
    </div>
  );
}

export default LogoComponent;
