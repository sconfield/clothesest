import React from 'react';
import styles from './LogoComponent.css';

import { Tag, Icon } from 'antd';

function LogoComponent() {
  return (
    <div className={styles.normal}>
      <Tag color="pink" size="large">
        <Icon type="smile-o" spin="true" />
        <label>&nbsp;Clothesest</label>
      </Tag>
    </div>
  );
}

export default LogoComponent;
